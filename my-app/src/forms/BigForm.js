import React, { useState } from "react";
import { Form, Input, Card, Row, Col, Button, Radio, Divider, Typography} from 'antd';
import axios from 'axios';

const { Title } = Typography;

const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 10,
  },
};

const RadioGroup = Radio.Group;
const MyForm = () => { 
  
  const [aState,setA] = useState();  
  
  const onFinish = (values) =>{
    const myValues = values["user"]
    
    const obj = {
      Year: myValues["gender"],
      Make: myValues["age"], 
      Quantity: parseInt(myValues["email"]),
      Pct: parseFloat(myValues["website"])
    }       
      
  axios.post(
    "http://127.0.0.1:5000/api/v1.0/model/",
    obj,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    })
    .then(function (response) {
      console.log( response);
      setA(response["data"]["prediction"]["hospitalization"])
    })
    .catch(function (error) {
      console.log("Post Error : " +error);
    })
  }
    

  return (
    <div>
        <Title>Days of Hospitalization Prediction</Title>
        <Divider/>
    <div>
    <Row gutter={40}>
    <Col span={8}>
    <Card>
    <Form onFinish = {onFinish}
    {...layout}  
    // validateMessages={validateMessages}
    >
      <Form.Item label="Gender"  name={['user','gender']}>
        <RadioGroup>
            <Radio value={1}>Male</Radio>
            <Radio value={2}>Female</Radio>
        </RadioGroup>
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Age"
        // rules={[
        //   {
        //     type: 'number',
        //     min: 0,
        //     max: 99,
        //   },
        // ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        // rules={[
        //   {
        //     type: 'email',
        //   },
        // ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Website">
        <Input />
      </Form.Item>
      {/* <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input />
      </Form.Item> */}
      {/* <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="num"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Last"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <Input />
      </Form.Item> */}
      <Form.Item>
      <center>
    <Button type="primary" htmlType="submit">
      Forecast
    </Button>
    </center>
        </Form.Item> 
      </Form>
      </Card>
      </Col>
      <Col span={8}>
      <Card>
        <center><h1 style={{fontSize:"25px"}}><b>Prediction</b></h1></center>
        {/* <center><h1 style={{fontSize:"20px"}}>{{aState} === "Day" ? "The patient will stay in the hospital for a day":
                                               {aState} === "Week" ? "The patient will stay in the hospital from two days to a week":
                                               {aState} === "TwoWeeks" ? "The patient will stay in the hospital from one week to two weeks":
                                               {aState} === "Month" ? "The patient will stay in the hospital from two weeks to a month":
                                               {aState} === "More" ? "The patient will stay in the hospital for more than a month": ""}
        </h1></center> */}
        <center><h1 style={{fontSize:"20px"}}>{aState}</h1></center>
      </Card>
    </Col>
  </Row>
  </div>
  </div>
  );
};

export default MyForm;