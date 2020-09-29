import React, { useState } from "react";
import { Typography } from "antd";
import axios from 'axios';

const { Title } = Typography;

// async function Pong() {
//   try {
//     const res = await fetch(
//       `http://127.0.0.1:5000/ping`
//     );
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }



const FormSubmit = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [hospitalization, setHospitalization] = useState("");
  const [admission_type, setAdmission_Type] = useState("");
  const [admission_origin, setAdmission_Origin] = useState("");
  const [admission_diagnosis, setAdmission_Diagnosis] = useState("");
  const [insurance, setInsurance] = useState("");
  const [religion, setReligion] = useState("");
  const [marital_status, setMarital_Status] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [num_callouts, setNum_Callouts] = useState("");
  const [num_diagnoses, setNum_Diagnoses] = useState("");
  const [num_procedures, setNum_Procedures] = useState("");
  const [admission_procedure, setAdmission_Procedure] = useState("");
  const [num_ctpevents, setNum_Ctpevents] = useState("");
  const [num_inputevents, setNum_Inputevents] = useState("");
  const [num_labevents, setNum_Labevents] = useState("");
  const [num_microbiologyevents, setNum_Microbiologyevents] = useState("");
  const [num_noteevents, setNum_Noteevents] = useState("");
  const [num_outputevents, setNum_Outputevents] = useState("");
  const [num_procedureevents, setNum_Procedureevents] = useState("");
  const [num_transfers, setNum_Transfers] = useState("");
  const [num_chartevents, setNum_Chartevents] = useState("");
  const [expired, setExpired] = useState("");
  const [patient_id, setPatient_Id] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [isSent, setIsSent] = useState(false);
  

  const updateGender = (e) => {
    setGender(e.target.value);
  };

  const updateAge = (e) => {
    
    let val = e.target.value;
    
    if(!Number(val)){
      alert("Your age must be a number");
      }
    
    setAge(e.target.value);
  };

  const updateHospitalization = (e) => {
    setHospitalization(e.target.value);
  }

  const updateAdmission_Type = (e) => {
    setAdmission_Type(e.target.value);
  }

  const updateAdmission_Origin = (e) => {
    setAdmission_Origin(e.target.value);
  }

  const updateAdmission_Diagnosis = (e) => {
    setAdmission_Diagnosis(e.target.value);
  }

  const updateInsurance = (e) => {
    setInsurance(e.target.value);
  }

  const updateReligion = (e) => {
    setReligion(e.target.value);
  }

  const updateMarital_Status = (e) => {
    setMarital_Status(e.target.value);
  }

  const updateEthnicity = (e) => {
    setEthnicity(e.target.value);
  }

  const updateNum_Callouts = (e) => {
    let val = e.target.value;
    
    if(!Number(val)){
      alert("The input must be a number");
      }


    setNum_Callouts(e.target.value);
  }

  const updateNum_Diagnoses = (e) => {
    let val = e.target.value;
    
    if(!Number(val)){
      alert("The input must be a number");
      }

    setNum_Diagnoses(e.target.value);
  }

  const updateNum_Procedures = (e) => {
    let val = e.target.value;
    
    if(!Number(val)){
      alert("The input must be a number");
      }

    setNum_Procedures(e.target.value);
  }

  const updateAdmission_Procedure = (e) => {
    setAdmission_Procedure(e.target.value);
  }

  const updateNum_Ctpevents = (e) => {
    let val = e.target.value;
    
    if(!Number(val)){
      alert("The input must be a number");
      }

    setNum_Ctpevents(e.target.value);
  }

  const updateNum_Inputevents = (e) => {
    let val = e.target.value;
    
    if(!Number(val)){
      alert("The input must be a number");
      }

    setNum_Inputevents(e.target.value);
  }

  const updateNum_Labevents = (e) => {
    let val = e.target.value;
    
    if(!Number(val)){
      alert("The input must be a number");
      }

    setNum_Labevents(e.target.value);
  }

  const updateNum_Microbiologyevents = (e) => {
    let val = e.target.value;
    
    if(!Number(val)){
      alert("The input must be a number");
      }

    setNum_Microbiologyevents(e.target.value);
  }

  const updateNum_Noteevents = (e) => {
    let val = e.target.value;
    
    if(!Number(val)){
      alert("The input must be a number");
      }

    setNum_Noteevents(e.target.value);
  }

  const updateNum_Outputevents = (e) => {
    let val = e.target.value;
    
    if(!Number(val)){
      alert("The input must be a number");
      }

    setNum_Outputevents(e.target.value);
  }

  const updateNum_Procedureevents = (e) => {
    let val = e.target.value;
    
    if(!Number(val)){
      alert("The input must be a number");
      }

    setNum_Procedureevents(e.target.value);
  }

  const updateNum_Transfers = (e) => {
    let val = e.target.value;
    
    if(!Number(val)){
      alert("The input must be a number");
      }

    setNum_Transfers(e.target.value);
  }

  const updateNum_Chartevents = (e) => {
    let val = e.target.value;
    
    if(!Number(val)){
      alert("The input must be a number");
      }

    setNum_Chartevents(e.target.value);
  }

  const updateExpired = (e) => {
    setExpired(e.target.value);
  }

  const updatePatient_Id = (e) => {
    setPatient_Id(e.target.value);
  }

  



  

  
  var obj = { 
      // gender: gender,
      age: parseFloat(age),
      hospitalization: hospitalization, 
      // admission_type: admission_type, 
      // admission_origin: admission_origin, 
      // admission_diagnosis: admission_diagnosis, 
      // insurance: insurance,
      // religion: religion, 
      // marital_status: marital_status,
      // ethnicity: ethnicity, 
      num_callouts: parseFloat(num_callouts),
      num_diagnoses: parseFloat(num_diagnoses)
      // num_procedures: num_procedures,
      // admission_procedure: admission_procedure, 
      // num_ctpevents: num_ctpevents,
      // num_inputevents: num_inputevents, 
      // num_labevents: num_labevents, 
      // num_microbiolgyevents: num_microbiologyevents,
      // num_noteevents: num_noteevents, 
      // num_outputevents: num_outputevents, 
      // num_procedureevents: num_procedureevents,
      // num_transfers: num_transfers,
      // num_chartevents: num_chartevents,
      // expired: expired
    };

  var myJSON = JSON.stringify(obj);



const submit = async (e) => {
  e.preventDefault();
  console.log(myJSON);
  axios.post(
    "http://127.0.0.1:5000/api/v1.0/model/",
    myJSON,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    }).then(function (response) {
    console.log( response);
  })
  .catch(function (error) {
    console.log("Post Error : " +error);
  });
};

  


  return (
    <div>
      <Title>Form submission</Title>
      <center>
      <form onSubmit={submit} id="myForm"  >
        {/* <div>
          <label htmlFor="gender">Input patient gender: </label>
          <center>
          <input
            type="text"
            name="gender"
            value={gender}
            onChange={updateGender}
           
          />
          </center>
        </div> */}
        <div>
          <label htmlFor="age">Set patient age:   </label>
          <center>
          <input
          type="text"
          name="age"
          value={age}
          onChange={updateAge}/>
          </center>
        </div>
        <div>
          <label htmlFor="hospitalization">Set hospitalization type:</label>
          <center>
          <input
          type="text"
          name="hospitalization"
          value={hospitalization}
          onChange={updateHospitalization}/>
          </center>
        </div>
        {/* <div>
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
        <div>
          <label htmlFor="insurance">Set insurance type:    </label>
          <center>
          <input
          type="text"
          name="insurance"
          value={insurance}
          onChange={updateInsurance}/>
          </center>
        </div>
        <div>
          <label htmlFor="religion">Set religion:       </label>
          <center>
          <input
          type="text"
          name="religion"
          value={religion}
          onChange={updateReligion}/>
          </center>
        </div>
        <div>
          <label htmlFor="marital_status">Set marital status: </label>
          <center>
          <input
          type="text"
          name="marital_status"
          value={marital_status}
          onChange={updateMarital_Status}/>
          </center>
        </div>
        <div>
          <label htmlFor="ethnicity">Set ethnicity:     </label>
          <center>
          <input
          type="text"
          name="ethnicity"
          value={ethnicity}
          onChange={updateEthnicity}/>
          </center>
        </div> */}
        <div>
          <label htmlFor="num_callouts">Set number of callouts:</label>
          <center>
          <input
          type="text"
          name="num_callouts"
          value={num_callouts}
          onChange={updateNum_Callouts}/>
          </center>
        </div>
        <div>
          <label htmlFor="num_diagnoses">Set number of diagnoses:</label>
          <center>
          <input
          type="text"
          name="num_diagnoses"
          value={num_diagnoses}
          onChange={updateNum_Diagnoses}/>
          </center>
        </div>
        {/* <div>
          <label htmlFor="num_procedures">Set number of procedures:</label>
          <center>
          <input
          type="text"
          name="num_procedures"
          value={num_procedures}
          onChange={updateNum_Procedures}/>
          </center>
        </div>
        <div>
          <label htmlFor="admission_procedure">Set admission procedure:</label>
          <center>
          <input
          type="text"
          name="admission_procedure"
          value={admission_procedure}
          onChange={updateAdmission_Procedure}/>
          </center>
        </div>
        <div>
          <label htmlFor="num_ctpevents">Set number of ctp events:</label>
          <center>
          <input
          type="text"
          name="num_ctpevents"
          value={num_ctpevents}
          onChange={updateNum_Ctpevents}/>
          </center>
        </div>
        <div>
          <label htmlFor="num_inputevents">Set number of input events:</label>
          <center>
          <input
          type="text"
          name="num_inputevents"
          value={num_inputevents}
          onChange={updateNum_Inputevents}/>
          </center>
        </div>
        <div>
          <label htmlFor="num_labevents">Set number of lab events:</label>
          <center>
          <input
          type="text"
          name="num_labevents"
          value={num_labevents}
          onChange={updateNum_Labevents}/>
          </center>
        </div>
        <div>
          <label htmlFor="num_microbiologyevents">Set number of microbiology events:</label>
          <center>
          <input
          type="text"
          name="num_microbiologyevents"
          value={num_microbiologyevents}
          onChange={updateNum_Microbiologyevents}/>
          </center>
        </div>
        <div>
          <label htmlFor="num_noteevents">Set number of note events:</label>
          <center>
          <input
          type="text"
          name="num_noteevents"
          value={num_noteevents}
          onChange={updateNum_Noteevents}/>
          </center>
        </div>
        <div>
          <label htmlFor="num_outputevents">Set number of output events:</label>
          <center>
          <input
          type="text"
          name="num_outputevents"
          value={num_outputevents}
          onChange={updateNum_Outputevents}/>
          </center>
        </div>
        <div>
          <label htmlFor="num_procedureevents">Set number of procedure events:</label>
          <center>
          <input
          type="text"
          name="num_procedureevents"
          value={num_procedureevents}
          onChange={updateNum_Procedureevents}/>
          </center>
        </div>
        <div>
          <label htmlFor="num_transfers">Set number of transfers:</label>
          <center>
          <input
          type="text"
          name="num_transfers"
          value={num_transfers}
          onChange={updateNum_Transfers}/>
          </center>
        </div>
        <div>
          <label htmlFor="num_chartevents">Set number of chart events:</label>
          <center>
          <input
          type="text"
          name="num_chartevents"
          value={num_chartevents}
          onChange={updateNum_Chartevents}/>
          </center>
        </div>
        <div>
          <label htmlFor="expired">Set if ??? expired:</label>
          <center>
            
          <input
          type="text"
          name="expired"
          value={expired}
          onChange={updateExpired}/>
          </center>
        </div> */}
        <button type="submit">Forecast!</button>
      </form>
      </center>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map(({ name, gender }) => (
            <li key={name}>
              name: {name} / gender: {gender}
            </li>
          ))}
        </ul>
      )}
    </div>
  );



};

export default FormSubmit;
