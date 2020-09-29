import os.path
import sys
sys.path.append(os.path.join(os.path.dirname(__file__),'..'))
import pandas as pd
import os
import csv
import requests
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.preprocessing import StandardScaler
from repo.saveToSql import save_to_sql
import pickle


def main():
    patient_data = pd.read_csv(os.getcwd() + "\\repo\\sales.csv",encoding="latin-1")
    preprocessed_data = preprocessing(patient_data)
    encoded_data = encoding(preprocessed_data)
    predictions = ml(encoded_data)
    data_for_sql = preprocessed_data.drop(columns=["Month"])
    try:
        save_to_sql(data_for_sql, 'PatientData')
        return {"completed": True}
    except Exception:
        return {"completed": False}



def preprocessing(data):
    data["Make"]=data["Make"].str.replace('\xa0Mercedes-Benz ','Mercedes-Benz ')
    data.drop(["Model"],axis=1,inplace=True)
    return data

def encoding(data):
    categorical_columns = ['Make']
    data_final = pd.get_dummies(data, columns=categorical_columns)
    return data_final

def ml(data):
    X = data.drop(columns=["Month"])
    y = data["Month"]
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    ss = StandardScaler()
    X_train = ss.fit_transform(X_train)
    X_test = ss.transform(X_test)
    classifier = KNeighborsClassifier(n_neighbors=5)
    classifier.fit(X_train, y_train)
    pickle_out = open('model.pkl','wb')
    pickle.dump(classifier, pickle_out)
    pickle_out.close()
    return 'Model run'

if __name__ == "__main__":
    main()