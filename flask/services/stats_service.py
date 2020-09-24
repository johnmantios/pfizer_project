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

    df = pd.read_sql(tableName, con=engine)
    return df

patient_df = getFromSql("PatientData")

def main():
    return {"stats": {"pie_chart_data": pie_chart_data()}}

# # def stats1():
# #     pass


# # def stats2():
# #     pass


# # def stats3():
# #     pass

# # def histogram_data():
# #     pass

def pie_chart_data():
    makes = patient_df.groupby(['Make']).count().index
    sizes = patient_df.groupby(['Make']).count()['Quantity']
    pie_df = pd.DataFrame({'make':makes,'size':sizes})
    pie_df.reset_index(drop=True, inplace=True)
    return pie_df.to_dict(orient='records')
    

if __name__ == "__main__":
    main()