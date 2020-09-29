import os.path
import sys
sys.path.append(os.path.join(os.path.dirname(__file__),'..'))
import pandas as pd
from repo.readFromSql import getFromSql


patient_df = getFromSql("PatientData")

def main():
    # return {"stats": {"pie_chart_data": pie_chart_data()}}
    return pie_chart_data()

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