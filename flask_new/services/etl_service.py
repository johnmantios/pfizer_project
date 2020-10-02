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
from catboost import CatBoostClassifier,cv,Pool
from sklearn.preprocessing import StandardScaler
import numpy as np





def main():
    data = pd.read_csv(os.getcwd() + "/repo/data.csv",
    na_values = ['na','?','NOT AVAILABLE','NOT SPECIFIED','NOT OBTAINED','UNKNOWN',
                             'UNK','UNKNOWN/NOT SPECIFIED',
                             'UNABLE TO OBTAIN', 'PATIENT DECLINED TO ANSWER','UNOBTAINABLE',
                             'UNKNOWN','NOT AVAIL.',' ','UNKNOWN (DEFAULT)'])


    preprocessed_data, stats_data = preprocessing(data)
    # stats_data.to_csv(os.getcwd() + "/repo/stats_data.csv")
    encoded_data = encoding(preprocessed_data)
    # ml(encoded_data)
    data_for_sql = preprocessed_data.drop(columns=['Hospitalization'])
    
    try:
        save_to_sql(stats_data,'Data')
        save_to_sql(data_for_sql, 'PatientData')
        return {"completed": True}
    except Exception:
        return {"completed": False}



def preprocessing(data):

#admission_origin

    data['admission_origin'] = data['admission_origin'].str.strip()

    data.admission_origin = data.admission_origin.replace('\s+', ' ', regex = True)

    data['admission_origin'] = data['admission_origin'].replace(['ER ADMIT','ER ADMISSION','EMERGENCY ROOM ADMISSION','ADMITTED FROM EMERGENCY','ADMITTED FRIM EMERGENCY','EMERGENCY ROOM ADMIT','EMERG. ROOM ADMISSION'],'EMERGENCY ROOM ADMISSION')

    data['admission_origin'] = data['admission_origin'].replace(['CLINIC REFERRAL','CINIC REFERRAL','CLINIC','CLINIC REFERAL','FROM CLINIC'],'CLINIC REFERRAL')
    data['admission_origin'] = data['admission_origin'].replace(['CLINIC','FROM CLINIC'],'CLINIC TRANSFER')
    data['admission_origin'] = data['admission_origin'].replace(['HOSP. TRAN.','HOSPITAL TRANSFER','TFH','TRANFSER FROM HOSPITAL','TRANFSER FROM SAME HOSP.','TRANS FRM HPL','TRANSFER FROM HOSP.','TRANSFER FROM HOSPITAL','TRANSFER FROM SAME HOSPITAL','INTERNAL TRANSFER'],'HOSPITAL TRANSFER')
    data['admission_origin'] = data['admission_origin'].replace(['HMO REFERAL','HMO REFERRAL'],'HMO REFERRAL')
    data['admission_origin'] = data['admission_origin'].replace(['PHYSICAL REFERRAL','PHYS REFERRAL'],'PHYSICAL REFERRAL')
    data['admission_origin'] = data['admission_origin'].replace(['TRANS FRM SKL NURSE','TRANSFER FROM SKILLED NURSE'],'NURSE TRANSFER')
    data['admission_origin'] = data['admission_origin'].replace(['TRANSFER FROM OTHER HEALTH CENTER','TRNS FR HEALTH CNTR','TRANSFER FROM OHTER HEALTH CENTER'],'HEALTH CENTER TRANSFER')
    data['admission_origin'].fillna('UNKNOWN ORIGIN',inplace=True)


    #ethnicity
    data['ethnicity'] = data['ethnicity'].replace(['ASIAN - ASIAN INDIAN','ASIAN - CAMBODIAN',
                                                'ASIAN - CHINESE','ASIAN - FILIPINO','ASIAN - JAPANESE',
                                                'ASIAN - KOREAN','ASIAN - OTHER','ASIAN - THAI','ASIAN - VIETNAMESE'],'ASIAN')

    data['ethnicity'] = data['ethnicity'].replace(['CAUCASIAN','CAUCATIAN','WHITE - BRAZILIAN',
                                                'PORTUGUESE','WHITE - EASTERN EUROPEAN','WHITE - OTHER EUROPEAN',
                                                'WHITE - RUSSIAN'],'WHITE')

    data['ethnicity'] = data['ethnicity'].replace(['GUERO','HISPANIC OR LATINO',
                                                'HISPANIC/LATINO - CENTRAL AMERICAN (OTHER)','HISPANIC/LATINO - COLOMBIAN',
                                                'HISPANIC/LATINO - CUBAN','HISPANIC/LATINO - DOMINICAN',
                                                'HISPANIC/LATINO - GUATEMALAN','HISPANIC/LATINO - HONDURAN',
                                                'HISPANIC/LATINO - MEXICAN','HISPANIC/LATINO - PUERTO RICAN',
                                                'HISPANIC/LATINO - SALVADORAN'],'HISPANIC/LATINO')

    data['ethnicity'] = data['ethnicity'].replace(['BLACK/AFRICAN AMERICAN','BLACK/HAITIAN',
                                                'BLACK/AFRICAN','BLACK/CAPE VERDEAN','CARIBBEAN ISLAND'],'BLACK')

    data['ethnicity'].fillna('UNKNOWN ETHNICITY',inplace=True)

    for item in data['ethnicity']:
        if item not in ['UNKNOWN ETHNICITY','WHITE','BLACK','ASIAN','HISPANIC/LATINO']:
            data['ethnicity'] = data['ethnicity'].replace(item,'OTHER ETHNICITY')    




    #religion
    data['religion'] = data['religion'].replace(['CATHOLIC', 'PROTESTANT QUAKER', 
                            'EPISCOPALIAN', 'GREEK ORTHODOX',
                            'CHRISTIAN SCIENTIST',
                                                'ROMANIAN EAST. ORTH', 'BAPTIST', 'METHODIST',
                            '7TH DAY ADVENTIST'],'CHRISTIAN')

    data['religion'] = data['religion'].replace('JEWISH','HEBREW')
    data['religion'] = data['religion'].replace(['UNITARIAN-UNIVERSALIST', 'SCIENTOLOGY', 'STAN','OTHER'],'OTHER')
    data['religion'] = data['religion'].fillna('NO RELIGION')

    #insurance
    data['insurance'].fillna('UNSPECIFIED INSURANCE',inplace = True)
    data['insurance'] = data['insurance'].str.upper() 

    #admission procedure
    data['admission_procedure']=data['admission_procedure'].fillna('NO PROCEDURE ON ADMISSION')
    #only keep NO PROCEDURE ON ADMISSION, everything else->NaN
    # data.loc[~data["admission_procedure"].isin(['NO PROCEDURE ON ADMISSION']), "admission_procedure"] = np.nan
    data['admission_procedure'] = data['admission_procedure'].apply(lambda x: 'No' if x =='NO PROCEDURE ON ADMISSION' else 'Yes')


    #drop
    data=data.drop('marital_status',axis=1) 
    data=data.drop('patient_id',axis=1) 
    data=data.drop('num_procedureevents',axis=1)
    data=data.drop('num_inputevents',axis=1)
    data=data.drop('expired',axis=1)


    #hospitalization

    data=data.drop('admission_diagnosis', axis=1)
    data2=data.copy()

    data['hospitalization'] = data['hospitalization'].apply(lambda x: "Day" if x==1 else ("Week" if x < 8 else ("TwoWeeks" if x<15 else ("Month" if x<31 else "More"))))
    # category = pd.cut(data['hospitalization'],bins=[-1,1,7,14,30,300],labels=['Day','Week','TwoWeeks','Month','More'])
    # category = category.replace(
    #     {"Day": 0 ,"Week": 1,"TwoWeeks" : 2, "Month" : 3, "More" : 4})
    # data['duration_of_hospitalization']=category
    # data=data.drop('hospitalization',axis=1)


    # data=data.drop('admission_origin', axis=1)


    # encoded_adprocedure= data['admission_procedure'].str.get_dummies()
    # data = data.join(encoded_adprocedure)
    # data = data.drop('admission_procedure',axis = 1)

    data2['Hospitalization2'] = data['hospitalization']

    data.columns = ['Gender', 'Age', 'Hospitalization' ,'AdmissionType', 'AdmissionOrigin',  'Insurance', 'Religion', 'Ethnicity',
    'Callouts','Diagnoses','Procedures','AdmissionProcedures','CptEvents' ,'LabEvents', 'MicrobiologyEvents','NoteEvents','OutputEvents',
    'Transfers','ChartEvents']

    data = data[['Gender', 'Age', 'Hospitalization' ,'Religion', 'Ethnicity', 'AdmissionType', 'AdmissionOrigin', 'Insurance',
    'AdmissionProcedures', 'Callouts', 'Diagnoses', 'Procedures', 'Transfers', 'CptEvents', 'LabEvents'
    ,'NoteEvents', 'OutputEvents', 'ChartEvents', 'MicrobiologyEvents']]


    return data, data2





def encoding(data):


    
    categorical_columns = ['Gender', 'Religion', 'Ethnicity', 'AdmissionType', 'AdmissionOrigin', 'Insurance', 
    'AdmissionProcedures']


    data = pd.get_dummies(data, columns=categorical_columns)



    #     #gender
    # encoded_gender=data['gender'].str.get_dummies()
    # data = data.join(encoded_gender)
    # data = data.drop('gender',axis = 1)


    # #admission_origin
    # encoded_origin=data['admission_origin'].str.get_dummies()
    # data = data.join(encoded_origin)
    # data = data.drop('admission_origin',axis = 1)

    # #insurance
    # encoded_insurance=data['insurance'].str.get_dummies()
    # data = data.join(encoded_insurance)
    # data = data.drop('insurance',axis = 1)

    # #religion
    # encoded_religion=data['religion'].str.get_dummies()
    # data = data.join(encoded_religion)
    # data = data.drop('religion',axis = 1)

    # #ethnicity
    # encoded_ethnicity=data['ethnicity'].str.get_dummies()
    # data = data.join(encoded_ethnicity)
    # data = data.drop('ethnicity',axis = 1)

    #admission_type
    # data['admission_type']=data['admission_type'].replace('NEWBORN',3)
    # data['admission_type']=data['admission_type'].replace('EMERGENCY',2)
    # data['admission_type']=data['admission_type'].replace('URGENT',1)
    # data['admission_type']=data['admission_type'].replace('ELECTIVE',0)

    # #admission_procedure
    # encoded_adprocedure= data['admission_procedure'].str.get_dummies()
    # data = data.join(encoded_adprocedure)
    # data = data.drop('admission_procedure',axis = 1)


    #### SPLIT FEATURES, TARGET & SCALE ####################################################################

    # X = data.loc[:,data.columns != 'duration_of_hospitalization']
    # y = data['duration_of_hospitalization']

    # to_scale = ['age','num_callouts','num_diagnoses','num_procedures',
    #         'num_cptevents',
    #             'num_labevents','num_microbiologyevents',
    #         'num_noteevents','num_outputevents',
    #             'num_transfers','num_chartevents']

    # X[to_scale] = StandardScaler().fit_transform(X[to_scale])


    return data

def ml(data):
    mapping = {'Day':0, 'Week': 1, 'TwoWeeks':2, 'Month':3, 'More':4}
    data['Hospitalization'] =  data['Hospitalization'].map(mapping)
    X = data.drop(columns=['Hospitalization'])
    y = data['Hospitalization']

    # to_scale = ['age','num_callouts','num_diagnoses','num_procedures',
    #         'num_cptevents',
    #             'num_labevents','num_microbiologyevents',
    #         'num_noteevents','num_outputevents',
    #             'num_transfers','num_chartevents']

    X = StandardScaler().fit_transform(X)

    catclass=CatBoostClassifier(random_state=9) #Consider dropping random_state
    catclass.fit(X, y)
    pickle_out = open('model.pkl','wb')
    pickle.dump(catclass, pickle_out)
    pickle_out.close()

    
    return "Model run"
    




if __name__ == "__main__":
    main()