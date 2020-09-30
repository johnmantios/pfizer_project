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


// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//     email: '${label} is not validate email!',
//     number: '${label} is not a validate number!',
//   },
//   number: {
//     range: '${label} must be between ${min} and ${max}',
//   },
// };

const RadioGroup = Radio.Group;
const MyForm = () => {



    // const [Year, setYear] = useState("");
    // const updateYear = (e) => {
    //     setYear(e.target.value);
    // }
    // const [Make,setMake] = useState("");
    // const updateMake = (e) => {
    //   setMake(e.target.value)
    // }
    // const [Quantity, setQuantity] = useState("");
    // const updateQuantity = (e) => {
    //   setQuantity(e.target.value)
    // }
    // const [Pct, setPct] = useState("");
    // const updatePct = (e) => {
    //   setPct(e.target.value)
    // }



    

    // const submit = async (e) => {
    //   e.preventDefault();
    //   console.log(obj);
    //   axios.post(
    //     "http://127.0.0.1:5000/api/v1.0/model/",
    //     obj,
    //     {
    //       headers: {
    //         "Access-Control-Allow-Origin": "*",
    //         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    //         'Access-Control-Allow-Headers': 'Content-Type'
    //       }
    //     }).then(function (response) {
    //     console.log( response);
    //   })
    //   .catch(function (error) {
    //     console.log("Post Error : " +error);
    //   });
    // };
    

    
      const onFinish = (values) =>{

        const myValues = values["user"]
        console.log(myValues)

        
        
        const obj = {
          Year: myValues["gender"],
          Make: myValues["age"], 
          Quantity: parseInt(myValues["email"]),
          Pct: parseFloat(myValues["website"])
        }
        console.log(obj)

       
      
        axios.post(
        "http://127.0.0.1:5000/api/v1.0/model/",
        obj,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            'Access-Control-Allow-Headers': 'Content-Type'
          }
        }).then(function (response) {
        console.log( response);
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
        <RadioGroup 
        // onChange={updateYear} 
        >
            <Radio value={2020}>2020</Radio>
            <Radio value={2021}>2021</Radio>
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
    <Button type="primary" htmlType="submit"   >
      Forecast
    </Button>
    </center>
        </Form.Item> 
      </Form>
      </Card>
      </Col>
      <Col span={8}>
      {/* <Card>
      <Form {...layout} validateMessages={validateMessages}>
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
    </Form>
    </Card> */}
    </Col>
  </Row>
  </div>
    <Form >
    {/* <center>
    <Button type="primary" htmlType="submit"   >
      Forecast
    </Button>
    </center> */}
  </Form >
  </div>
  );
};

export default MyForm;