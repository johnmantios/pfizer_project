import React, { useState } from "react";
import { Typography } from "antd";

const { Title } = Typography;

const FormSubmit = () => {
  const [gender, setGender] = useState("");
  const [admission_type, setAdmission_Type] = useState("");
  const [admission_origin, setAdmission_Origin] = useState("");
  const [admission_diagnosis, setAdmission_Diagnosis] = useState("");  

  const updateGender = (e) => {
    setGender(e.target.value);
  };

  const updateAdmission_Type = (e) => {
    setAdmission_Type(e.target.value);
  }

  const updateAdmission_Origin = (e) => {
    setAdmission_Origin(e.target.value);
  }

  const updateAdmission_Diagnosis = (e) => {
    setAdmission_Diagnosis(e.target.value);
  }
  
  var obj = {
    gender: gender,  
    admission_type: admission_type, 
    admission_origin: admission_origin, 
    admission_diagnosis: admission_diagnosis
  };

  var myJSON = JSON.stringify(obj);

  async function submit() {
    try {
      const res = await fetch(
        "http://127.0.0.1:5000/api/v1.0/model/", {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            body: myJSON
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Title>Form submission</Title>
      <center>
      <form onSubmit={submit} id="myForm"  >
        <div>
          <label htmlFor="gender">Input patient gender: </label>
          <center>
          <input
            type="text"
            name="gender"
            value={gender}
            onChange={updateGender}
          />
          </center>
        </div>
        <div>
          <label htmlFor="admission type">Set admission type:   </label>
          <center>
          <input
          type="text"
          name="admission_type"
          value={admission_type}
          onChange={updateAdmission_Type}/>
          </center>
        </div>
        <div>
          <label htmlFor="admission_origin">Set admission origin: </label>
          <center>
          <input
          type="text"
          name="admission_origin"
          value={admission_origin}
          onChange={updateAdmission_Origin}/>
          </center>
        </div>
        <div>
          <label htmlFor="admission_diagnosis">Set admission diagnosis: </label>
          <center>
          <input
          type="text"
          name="admission_diagnosis"
          value={admission_diagnosis}
          onChange={updateAdmission_Diagnosis}/>
          </center>
        </div>
        <button type="submit">Forecast!</button>
      </form>
      </center>
    </div>
  );



};

export default FormSubmit;
