import pyodbc
import pandas as pd
import sqlalchemy as alc
from sqlalchemy import create_engine
import urllib

def save_to_sql(data,table_name):
    params = urllib.parse.quote_plus(
        'DRIVER={ODBC Driver 17 for SQL Server};'+
        'SERVER=localhost;'+
        'DATABASE=pfizer;'+
        'Trusted_Connection=yes'
    )
    engine = alc.create_engine("mssql+pyodbc:///?odbc_connect=%s" % params)
    if data.shape[0] == 1:
        action = 'append'
    else:
        action = 'replace'
    data.to_sql(name=table_name, con=engine, if_exists = action, index=False)
    return table_name