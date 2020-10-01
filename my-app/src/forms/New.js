import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Row, Col, Button, Radio, Card, Divider, Select, InputNumber} from 'antd';
import axios from 'axios';
import Texty from 'rc-texty';

const {Option} = Select;
const RadioGroup = Radio.Group;
const AdvancedSearchForm = () => {
    
    const [aState,setA] = useState();
    
    const [form] = Form.useForm();

    const onFinish = (values) => {
        
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
        }).then(function (response) {
        console.log( response);
        setA(response["data"]["prediction"]["hospitalization"])
      })
      .catch(function (error) {
        console.log("Post Error : " +error);
      })
  };

  return (
    <div>
        <b><Texty style={{textAlign:"center", fontSize:"30px"}}>Hospitalization Prediction</Texty></b>
        <Divider/>
        <Card style={{marginLeft:"20mm", marginRight:"20mm"}}>
            <Form form={form} name="advanced_search" className="ant-advanced-search-form" onFinish={onFinish}>
            <Row gutter={30}>
                    <Col span={6}>
                        <Form.Item 
                            name={['user','gender']} label="Gender"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select gender!',
                                },
                                ]}
                        >
                            <RadioGroup>
                                <Radio value={1}>Male</Radio>
                                <Radio value={2}>Female</Radio>
                            </RadioGroup>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'age']} label="Age"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please specify age',
                                }
                            ]}
                        >
                            <InputNumber style={{width:"15mm"}} min={1} max={99}/>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'religion']} label="Religion"
                            rules={[
                            {
                                required: true,
                                message: 'Please select religion!',
                            },
                            ]}
                        >
                            <Select style={{width:"30mm"}} placeholder="Select">
                                <Option value="Christian">Christian</Option>
                                <Option value="Hebrew">Hebrew</Option>
                                <Option value="Buddhist">Buddhist</Option>
                                <Option value="Muslim">Muslim</Option>
                                <Option value="Muslim">Muslim</Option>
                                <Option value="Jehova's Witness">Jehova's Witness</Option>
                                <Option value="No Religion">No Religion</Option>
                                <Option value="Other">Other</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'ethnicity']} label="Ethnicity"
                            rules={[
                            {
                                required: true,
                                message: 'Please select ethnicity!',
                            },
                            ]}
                        >
                            <Select style={{width:"30mm"}} placeholder="Select">
                                <Option value="White">White</Option>
                                <Option value="Black">Black</Option>
                                <Option value="Hispanic/Latino">Hispanic/Latino</Option>
                                <Option value="Asian">Asian</Option>
                                <Option value="Other">Other</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'admissionType']} label="Admission Type"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select admission type!',
                                },
                            ]}
                        >
                            <Select style={{width:"50mm"}} placeholder="Select">
                                <Option value="EMERGENCY">EMERGENCY</Option>
                                <Option value="NEWBORN">NEWBORN</Option>
                                <Option value="ELECTIVE">ELECTIVE</Option>
                                <Option value="URGENT">URGENT</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'admissionOrigin']} label="Admission Origin"
                            rules={[
                            {
                                required: true,
                                message: 'Please select admission origin!',
                            },
                            ]}
                        >
                            <Select style={{width:"45mm"}} placeholder="Select">
                                <Option value="Emergency room admission">Emergency room admission</Option>
                                <Option value="Physical referral">Physical referral</Option>
                                <Option value="Clinic referral">Clinic referral</Option>
                                <Option value="Hospital transfer">Hospital transfer</Option>
                                <Option value="Referral">Referral</Option>
                                <Option value="Nurse transfer">Nurse transfer</Option>
                                <Option value="HMO referral">HMO referral</Option>
                                <Option value="Health center transfer">Health center transfer</Option>
                                <Option value="Unknown origin">Unknown origin</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'insurance']} label="Insurance"
                            rules={[
                            {
                                required: true,
                                message: 'Please select insurance!',
                            },
                            ]}
                        >
                            <Select style={{width:"50mm"}} placeholder="Select">
                                <Option value="Medicare">Medicare</Option>
                                <Option value="Private">Private</Option>
                                <Option value="MedicAid">MedicAid</Option>
                                <Option value="Goverment">Goverment</Option>
                                <Option value="Self Pay">Self Pay</Option>
                                <Option value="Other">Other</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'admissionProcedures']} label="Admission Procedures"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please choose',
                                }
                            ]}
                        >
                            <RadioGroup style={{marginLeft:"8mm"}}>
                                <Radio value={1}>Yes</Radio>
                                <Radio value={2}>No</Radio>
                            </RadioGroup>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'numCallouts']} label="Callouts" 
                            rules={[
                                {
                                    required: true,
                                    message: 'Please type the number of callouts',
                                }
                            ]}
                        >
                            <InputNumber style={{width:"15mm"}} min={0}/>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'numDiagnoses']} label="Diagnoses"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please type the number of diagnoses',
                                }
                            ]}
                        >
                            <InputNumber style={{width:"15mm"}} min={0}/>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'numProcedures']} label="Procedures"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please type the number of procedures',
                                }
                            ]}
                        >
                            <InputNumber style={{width:"15mm"}} min={0}/>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'numTransfers']} label="Transfers"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please type the number of transfers',
                                }
                            ]}
                        >
                            <InputNumber style={{width:"15mm"}} min={0}/>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'numcptEvents']} label="Cpt Events"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please type the number of cpt events',
                                }
                            ]}
                        >
                            <InputNumber style={{width:"15mm"}} min={0}/>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'numlabEvents']} label="Lab Events"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please type the number of lab events',
                                }
                            ]}
                        >
                            <InputNumber style={{width:"15mm"}} min={0}/>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'noteEvents']} label="Note Events"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please type the number of note events',
                                }
                            ]}
                        >
                            <InputNumber style={{width:"15mm"}} min={0}/>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'outputEvents']} label="Output Events"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please type the number of output events',
                                }
                            ]}
                        >
                            <InputNumber style={{width:"15mm"}} min={0}/>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'numchartEvents']} label="Chart Events"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please specify the number of chart events',
                                }
                            ]}
                        >
                            <InputNumber style={{width:"15mm"}} min={0}/>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'nummicrobiologyEvents']} label="Microbiology Events"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please type the number of microbiology events',
                                }
                            ]}
                        >
                            <InputNumber style={{width:"15mm"}} min={0}/>
                        </Form.Item>
                    </Col>
            </Row>
            <Row>
                <Col span={24} style={{textAlign: 'center'}}>
                <Button type="primary" htmlType="submit" style={{backgroundColor:"rgb(227, 228, 228)", color:"black", borderColor:"black"}}>
                    Forecast
                </Button>
                </Col>
            </Row>
            </Form>
        </Card>
        <Card style={{marginLeft:"20mm", marginRight:"20mm", textAlign: 'center'}}>
            <h1 style={{fontSize:"25px"}}><b>Prediction {aState}</b></h1>
        </Card>
    </div>
  );
};

export default AdvancedSearchForm;