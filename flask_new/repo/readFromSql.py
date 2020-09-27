import pandas as pd
import pyodbc
import sqlalchemy as alc
import urllib

def getFromSql (tableName):
    params = urllib.parse.quote_plus(
    'DRIVER={ODBC Driver 17 for SQL Server};'+
    'SERVER=localhost;'+
    'DATABASE=pfizer;'+
    'Trusted_Connection=yes'
    )
    engine = alc.create_engine("mssql+pyodbc:///?odbc_connect=%s" % params)

    df = pd.read_sql(f"SELECT * FROM [pfizer].[dbo].[{tableName}]", con=engine)
    return df