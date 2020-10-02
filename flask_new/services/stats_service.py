import os.path
import sys
sys.path.append(os.path.join(os.path.dirname(__file__),'..'))
import pandas as pd
from repo.readFromSql import getFromSql
import json


patient_df = getFromSql("Data")

# patient_df = pd.read_csv(os.getcwd()+"/repo/stats_data.csv")

def main():
    
    a = pie_chart_data()
    b = bar_chart_data()
    c = bar_chart_data2()
    d = bar_chart_data3()
    # a2 = {"pie_chart_data": a}
    # b2 = {"bar_chart_data": b}
    # c2 = {"bar_chart_data2": c}
    # d2 = {"bar_chart_data3": d}
    # return json.dumps({"stats":[a2,b2,c2,d2][:]})
    
    return {
    "stats": {
        "pie_data": a,
        "bar_data":b,
        "bar_data2": c,
        "bar_data3": d
    }
}

    

def pie_chart_data():
    
    makes = patient_df["Hospitalization2"].value_counts().index
    sizes = patient_df['Hospitalization2'].value_counts()
    pie_df = pd.DataFrame({'Hospitalization2' : makes, 'size': sizes})
    return pie_df.to_dict(orient='records')



def bar_chart_data():

    makes2 = patient_df.groupby(["admission_type"]).count().index
    sizes2 = patient_df.groupby(["admission_type"]).mean()["hospitalization"]
    bar_df = pd.DataFrame({"admission_type":makes2,"hospitalization":sizes2})
    return bar_df.to_dict(orient="records")


    

def bar_chart_data2():
    makes3 = patient_df.groupby(["num_transfers"]).count().index
    sizes3 = patient_df.groupby(["num_transfers"]).mean()["hospitalization"]
    bar2_df = pd.DataFrame({"num_transfers":makes3,"hospitalization":sizes3})
    return bar2_df.to_dict(orient="records")

def bar_chart_data3():
    makes4 = patient_df.groupby(["num_diagnoses"]).count().index
    sizes4 = patient_df.groupby(["num_diagnoses"]).mean()["hospitalization"]
    bar3_df = pd.DataFrame({"num_diagnoses":makes4,"hospitalization":sizes4})
    return bar3_df.to_dict(orient="records")

if __name__ == "__main__":
    
     main()

    