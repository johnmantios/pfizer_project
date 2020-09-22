import React, { useState } from "react";
import { Typography } from "antd";

const { Title } = Typography;

/*async function seacrhSWCharacter(character) {
  try {
    const res = await fetch(
      `https://swapi.dev/api/people/?search=${character}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}*/

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
  

  const updateGender = (e) => {
    setGender(e.target.value);
  };

  const updateAge = (e) => {
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
    setNum_Callouts(e.target.value);
  }

  const updateNum_Diagnoses = (e) => {
    setNum_Diagnoses(e.target.value);
  }

  const updateNum_Procedures = (e) => {
    setNum_Procedures(e.target.value);
  }

  const updateAdmission_Procedure = (e) => {
    setAdmission_Procedure(e.target.value);
  }

  const updateNum_Ctpevents = (e) => {
    setNum_Ctpevents(e.target.value);
  }

  const updateNum_Unputevents = (e) => {
    setNum_Inputevents(e.target.value);
  }

  const updateNum_Labevents = (e) => {
    setNum_Labevents(e.target.value);
  }

  const updateNum_Microbiologyevents = (e) => {
    setNum_Microbiologyevents(e.target.value);
  }

  const updateNum_Noteevents = (e) => {
    setNum_Noteevents(e.target.value);
  }

  const updateNum_Outputevents = (e) => {
    setNum_Outputevents(e.target.value);
  }

  const updateNum_Procedureevents = (e) => {
    setNum_Procedureevents(e.target.value);
  }

  const updateNum_Transfers = (e) => {
    setNum_Transfers(e.target.value);
  }

  const updateNum_Chartevents = (e) => {
    setNum_Chartevents(e.target.value);
  }

  const updateExpired = (e) => {
    setExpired(e.target.value);
  }

  const updatePatient_Id = (e) => {
    setPatient_Id(e.target.value);
  }
  
  /*const handleSearch = async (e) => {
    e.preventDefault();
    const response = await seacrhSWCharacter(character);
    setSearchResults(response.results);
  };*/

  return (
    <div>
      <Title>Form submit</Title>
      <form onSubmit={handleSearch}>
        <div>
          <label htmlFor="gender">Input patient data:</label>
          <input
            type="text"
            name="gender"
            value={character}
            onChange={updateGender}
          />
        </div>
        <div>
          <label htmlFor="age">Set patient age:</label>
          <input
          type="text"
          name="age"
          value={character}
          onChange={updateAge}/>
        </div>
        <div>
          <label htmlFor="hospitaliazation">Set hospitalization type:</label>
          <input
          type="text"
          name="hospitalization"
          value={character}
          onChange={updateHospitalization}/>
        </div>
        <div>
          <label htmlFor="admission type">Set admission type:</label>
          <input
          type="text"
          name="admission_type"
          value={character}
          onChange={updateAdmission_Type}/>
        </div>
        <div>
          <label htmlFor="age">Set admission origin:</label>
          <input
          type="text"
          name="admission_origin"
          value={character}
          onChange={updateAdmission_Origin}/>
        </div>
        <div>
          <label htmlFor="age">Set admission diagnosis:</label>
          <input
          type="text"
          name="admission_diagnosis"
          value={character}
          onChange={updateAdmission_Diagnosis}/>
        </div>
        <div>
          <label htmlFor="age">Set insurance type:</label>
          <input
          type="text"
          name="insurance"
          value={character}
          onChange={updateInsurance}/>
        </div>
        <div>
          <label htmlFor="age">Set religion:</label>
          <input
          type="text"
          name="religion"
          value={character}
          onChange={updateReligion}/>
        </div>
        <div>
          <label htmlFor="age">Set marital status:</label>
          <input
          type="text"
          name="marital_status"
          value={character}
          onChange={updateMarital_Status}/>
        </div>
        <div>
          <label htmlFor="age">Set ethnicity:</label>
          <input
          type="text"
          name="ethnicity"
          value={character}
          onChange={updateEthnicity}/>
        </div>
        <div>
          <label htmlFor="age">Set number of callouts:</label>
          <input
          type="text"
          name="num_callouts"
          value={character}
          onChange={updateNum_Callouts}/>
        </div>
        <div>
          <label htmlFor="age">Set number of diagnoses:</label>
          <input
          type="text"
          name="num_diagnoses"
          value={character}
          onChange={updateNum_Diagnoses}/>
        </div>
        <div>
          <label htmlFor="age">Set number of procedures:</label>
          <input
          type="text"
          name="num_procedures"
          value={character}
          onChange={updateNum_Procedures}/>
        </div>
        <div>
          <label htmlFor="age">Set admission procedure:</label>
          <input
          type="text"
          name="admission_procedure"
          value={character}
          onChange={updateAdmission_Procedure}/>
        </div>
        <div>
          <label htmlFor="age">Set number of ctp events:</label>
          <input
          type="text"
          name="num_ctpevents"
          value={character}
          onChange={updateNum_Ctpevents}/>
        </div>
        <div>
          <label htmlFor="age">Set number of unput events:</label>
          <input
          type="text"
          name="num_unputevents"
          value={character}
          onChange={updateNum_Unputevents}/>
        </div>
        <div>
          <label htmlFor="age">Set number of lab events:</label>
          <input
          type="text"
          name="num_labevents"
          value={character}
          onChange={updateNum_Labevents}/>
        </div>
        <div>
          <label htmlFor="age">Set number of microbiology events:</label>
          <input
          type="text"
          name="num_microbiolgyevents"
          value={character}
          onChange={updateNum_Microbiologyevents}/>
        </div>
        <div>
          <label htmlFor="age">Set number of note events:</label>
          <input
          type="text"
          name="num_noteevents"
          value={character}
          onChange={updateNum_Noteevents}/>
        </div>
        <div>
          <label htmlFor="age">Set number of output events:</label>
          <input
          type="text"
          name="num_outputevents"
          value={character}
          onChange={updateNum_Outputevents}/>
        </div>
        <div>
          <label htmlFor="age">Set number of procedure events:</label>
          <input
          type="text"
          name="num_procedureevents"
          value={character}
          onChange={updateNum_Procedureevents}/>
        </div>
        <div>
          <label htmlFor="age">Set number of transfers:</label>
          <input
          type="text"
          name="num_transfers"
          value={character}
          onChange={updateNum_Transfers}/>
        </div>
        <div>
          <label htmlFor="age">Set number of chart events:</label>
          <input
          type="text"
          name="num_chartevents"
          value={character}
          onChange={updateNum_Chartevents}/>
        </div>
        <div>
          <label htmlFor="age">Set if ??? expired:</label>
          <input
          type="text"
          name="expired"
          value={character}
          onChange={updateExpired}/>
        </div>
        <button type="submit">Forecast!</button>
      </form>
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
