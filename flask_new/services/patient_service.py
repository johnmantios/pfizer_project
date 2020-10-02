import os.path
import sys
sys.path.append(os.path.join(os.path.dirname(__file__),'..'))
from repo.saveToSql import save_to_sql
import pandas as pd



def save_patient(patient):
    required_keys = {
        "Gender",
        "Age",
        "Religion",
        "Ethnicity",
        "AdmissionType",
        "AdmissionOrigin",
        "Insurance",
        "AdmissionProcedures",
        "Callouts",
        "Diagnoses",
        "Procedures",
        "Transfers",
        "CptEvents",
        "LabEvents",
        "NoteEvents",
        "OutputEvents",
        "ChartEvents",
        "MicrobiologyEvents"
    }


    # if not all(key in patient for key in required_keys):
    #     return None

    new_patient = {}
    new_to_save = {}
    for k in required_keys:
        new_patient[k] = patient[k]
        new_to_save[k] = [patient[k]]
        
    to_save_df = pd.DataFrame.from_dict(new_to_save)
    save_to_sql(to_save_df,'PatientData')
    return new_patient