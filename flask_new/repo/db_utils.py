import pyodbc


def init_db():
    print("Instantiating DB tables")
    try:
        create_patient_table()
        print("DB tables ready")
    except Exception as e:
        print("Something went wrong:" + str(e))


def create_patient_table():

    query = """
    USE pfizer
    IF NOT EXISTS (SELECT 0
           FROM INFORMATION_SCHEMA.TABLES
           WHERE TABLE_SCHEMA = 'pfizer'
           AND TABLE_NAME = 'PatientData')
    BEGIN
      CREATE TABLE [pfizer].[dbo].[PatientData] (
         gender TEXT,
         age TEXT,
         hospitalization TEXT,
         admission_type TEXT ,
         admission_origin TEXT,
         admission_diagnosis TEXT,
         insurance TEXT,
         religion TEXT,
         marital_status TEXT,
         ethnicity TEXT,
         num_callouts TEXT,
         num_diagnoses TEXT,
         num_procedures TEXT,
         admission_procedure TEXT,
        num_cptevents TEXT,
        num_inputevents TEXT,
        num_labevents TEXT,
        num_microbiologyevents TEXT,
        num_noteevents TEXT,
        num_outputevents TEXT,
        num_procedureevents TEXT,
        num_transfers TEXT,
        num_chartevents TEXT,
        expired TEXT,
        patient_id TEXT
     )
    END
    """

    driver = "{ODBC Driver 17 for SQL Server}"
    server = "localhost"
    db = "pfizer"

    connection_string = (
        f"DRIVER={driver};SERVER={server};DATABASE={db};Trusted_Connection=yes"
    )
    try:
        connection = pyodbc.connect(connection_string)
        cursor = connection.cursor()
        cursor.execute(query)
        cursor.commit()
        # Log me
        print("Patient table instantiated")
    except Exception as e:
        # Log me
        print("Something went wrong while insantiating patient table: " + str(e))


init_db()