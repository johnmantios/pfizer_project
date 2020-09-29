import React from "react";
import {Typography,List} from "antd";

const { Title } = Typography;

const Intro = () => (
    <>
    <Title style={{textAlign:"center",fontSize:"30px"}}>
      <h1 style={{fontSize:"60px"}}>
        <i>
          IntensiLedge
          <br></br>
          <h2>
            Medical Information Mart for Intensive Care
            <br></br>
            (MIMIC-III dataset)
          </h2>
        </i>
      </h1>
    </Title>
    <br></br>
    <br></br>
    <List style={{marginLeft:"20mm", marginLeft:"25mm", marginRight:"25mm"}}>
      <p style={{textAlign:"justify", fontSize:"4.5mm"}}>
        This project was created during the Data Science Bootcamp powered by Pfizer. The dataset used in this project 
        is a processed version of the Medical Information Mert for Intensive Care (MIMIC-III) dataset that contains 
        information relating to patients admitted to critical care units at a large tertiary care hospital. A detailed 
        description on the data collection protocol and the original dataset can be found here.
      </p>
      <p style={{textAlign:"justify", fontSize:"4.5mm"}}>
        The original MIMIC III dataset consists of 28 tables with millions of entries. The one used in this project contains
        a single table with nearly 50.000 hospital admissions. The data consists of patients' features like sex, age, 
        religion, ethnicity and some aggregated stats about the number of interactions.
      </p>
      <p style={{textAlign:"justify", fontSize:"4.5mm"}}>
        The goals of the project are to:
        <ul>
          <li>Present visualizations that have meaning and add value to clinical research</li>
          <li>Predict the length of hospitalization for a new patient</li>
        </ul>
      </p>
      </List>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </>
);

export default Intro;