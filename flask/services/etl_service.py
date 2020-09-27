import numpy as np
import pandas as pd
import pyodbc
import sqlalchemy as alc
from sqlalchemy import create_engine
import urllib
import os
import requests
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from imblearn.over_sampling import SMOTE
from sklearn.preprocessing import StandardScaler
import pickle


def main():
    patient_data = pd.read_csv(os.getcwd() + "/repo/sales.csv",encoding="latin-1")
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
    data_final = pd.get_dummies(data, columns=['Make'])
    return data_final

def ml(data):
    X = data.drop(columns=["Month"])
    y = data["Month"]
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    ss = StandardScaler()
    X_train = ss.fit_transform(X_train)
    X_test = ss.transform(X_test)
    print(X_train.shape)
    classifier = KNeighborsClassifier(n_neighbors=5)
    classifier.fit(X_train, y_train)
    pickle_out = open('model.pkl','wb')
    pickle.dump(classifier, pickle_out)
    pickle_out.close()
    return 'Model run'
    



def save_to_sql(data,table_name):
    params = urllib.parse.quote_plus(
        'DRIVER={ODBC Driver 17 for SQL Server};'+
        'SERVER=localhost;'+
        'DATABASE=pfizer;'+
        'Trusted_Connection=yes'
    )
    engine = alc.create_engine("mssql+pyodbc:///?odbc_connect=%s" % params)
 
    data.to_sql(name=table_name, con=engine, if_exists = 'replace', index=False)
    return table_name



if __name__ == "__main__":
    main()