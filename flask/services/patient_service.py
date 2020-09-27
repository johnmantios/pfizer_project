import pandas as pd

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

def save_patient(patient):
    required_keys = {
        "Year",
        "Make",
        "Quantity",
        "Pct"
    }

    new_patient = {}
    new_to_save = {}
    for k in required_keys:
        new_patient[k] = patient[k]
        new_to_save[k] = [patient[k]]
    
    to_save_df = pd.DataFrame.from_dict(new_to_save)
    save_to_sql(to_save_df,'PatientData')

    return new_patient