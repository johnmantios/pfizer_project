import numpy as np
import pandas as pd
import pyodbc
import sqlalchemy as alc
from sqlalchemy import create_engine
import urllib
import os
import requests


def main():
    patient_data = pd.read_csv(os.getcwd() + "/repo/data.csv")
    preprocessed_data = preprocessing(patient_data)
    encoded_data = encoding(preprocessed_data)
    predictions = ml(encoded_data)
    data_for_sql = pd.concat([preprocessed_data, predictions], axis=1)
    table = save_to_sql(data_for_sql, 'PatientData')
    return getFromSql(table)



def preprocessing(data):
    pass

def encoding(data):
    pass

def ml(data):
    pass


def save_to_sql(data,table_name):
    params = urllib.parse.quote_plus(
        'DRIVER={ODBC Driver 17 for SQL Server};'+
        'SERVER=localhost;'+
        'DATABASE=pfizer;'+
        'Trusted_Connection=yes'
    )
    engine = alc.create_engine("mssql+pyodbc:///?odbc_connect=%s" % params)
 
    data.to_sql(name=table_name, con=engine, if_exists = 'append', index=False)
    return table_name


def getFromSql (tableName):
    params = urllib.parse.quote_plus(
    'DRIVER={ODBC Driver 17 for SQL Server};'+
    'SERVER=localhost;'+
    'DATABASE=pfizer;'+
    'Trusted_Connection=yes'
    )
    engine = alc.create_engine("mssql+pyodbc:///?odbc_connect=%s" % params)

    df = pd.read_sql(tableName, con=engine)
    return df



if __name__ == "__main__":
    main()