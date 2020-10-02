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
            Gender: myValues["Gender"],
            Age: myValues["Age"], 
            Religion: parseInt(myValues["Religion"]),
            Ethnicity: parseFloat(myValues["Ethnicity"]),
            AdmissionType: myValues["AdmissionType"],
            AdmissionOrigin: myValues["AdmissionOrigin"],
            Insurance: myValues["Insurance"],
            AdmissionProcedures: myValues["AdmissionProcedures"],
            Callouts: myValues["Callouts"],
            Diagnoses: myValues["Diagnoses"],
            Procedures: myValues["Procedures"],
            Transfers: myValues["Transfers"],
            CptEvents: myValues["CptEvents"],
            LabEvents: myValues["LabEvents"],
            NoteEvents: myValues["NoteEvents"],
            OutputEvents: myValues["OutputEvents"],
            ChartEvents: myValues["ChartEvents"],
            MicrobiologyEvents: myValues["MicrobiologyEvents"]

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
                            name={['user','Gender']} label="Gender"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select gender!',
                                },
                                ]}
                        >
                            <RadioGroup>
                                <Radio value="M">Male</Radio>
                                <Radio value="F">Female</Radio>
                            </RadioGroup>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'Age']} label="Age"
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
                            name={['user', 'Religion']} label="Religion"
                            rules={[
                            {
                                required: true,
                                message: 'Please select religion!',
                            },
                            ]}
                        >
                            <Select style={{width:"30mm"}} placeholder="Select">
                                <Option value="CHRISTIAN">Christian</Option>
                                <Option value="HEBREW">Hebrew</Option>
                                <Option value="BUDDHIST">Buddhist</Option>
                                <Option value="MUSLIM">Muslim</Option>
                                <Option value="HINDU">Hindu</Option>
                                <Option value="JEHOVAH'S WITNESS">Jehova's Witness</Option>
                                <Option value="NO RELIGION">No Religion</Option>
                                <Option value="OTHER">Other</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'Ethnicity']} label="Ethnicity"
                            rules={[
                            {
                                required: true,
                                message: 'Please select ethnicity!',
                            },
                            ]}
                        >
                            <Select style={{width:"30mm"}} placeholder="Select">
                                <Option value="WHITE">White</Option>
                                <Option value="BLACK">Black</Option>
                                <Option value="HISPANIC/LATINO">Hispanic/Latino</Option>
                                <Option value="ASIAN">Asian</Option>
                                <Option value="UNKNOWN ETHNICITY">Unknown</Option>
                                <Option value="OTHER ETHNICITY">Other</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'AdmissionType']} label="Admission Type"
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
                            name={['user', 'AdmissionOrigin']} label="Admission Origin"
                            rules={[
                            {
                                required: true,
                                message: 'Please select admission origin!',
                            },
                            ]}
                        >
                            <Select style={{width:"45mm"}} placeholder="Select">
                                <Option value="EMERGENCY ROOM ADMISSION">Emergency room admission</Option>
                                <Option value="PHYSICAL REFERRAL">Physical referral</Option>
                                <Option value="CLINIC REFERRAL">Clinic transfer</Option>
                                <Option value="HOSPITAL TRANSFER">Hospital transfer</Option>
                                <Option value="REFERRAL">Referral</Option>
                                <Option value="NURSE TRANSFER">Nurse transfer</Option>
                                <Option value="HMO REFERRAL">HMO referral</Option>
                                <Option value="HEALTH CENTER TRANSFER">Health center transfer</Option>
                                <Option value="UNKNOWN ORIGIN">Unknown origin</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'Insurance']} label="Insurance"
                            rules={[
                            {
                                required: true,
                                message: 'Please select insurance!',
                            },
                            ]}
                        >
                            <Select style={{width:"50mm"}} placeholder="Select">
                                <Option value="MEDICARE">Medicare</Option>
                                <Option value="PRIVATE">Private</Option>
                                <Option value="MEDICAID">MedicAid</Option>
                                <Option value="GOVERNMENT">Government</Option>
                                <Option value="SELF PAY">Self Pay</Option>
                                <Option value="UNSPECIFIED INSURANCE">Other</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'AdmissionProcedures']} label="Admission Procedures"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please choose',
                                }
                            ]}
                        >
                            <RadioGroup style={{marginLeft:"8mm"}}>
                                <Radio value="Yes">Yes</Radio>
                                <Radio value="No">No</Radio>
                            </RadioGroup>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item 
                            name={['user', 'Callouts']} label="Callouts" 
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
                            name={['user', 'Diagnoses']} label="Diagnoses"
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
                            name={['user', 'Procedures']} label="Procedures"
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
                            name={['user', 'Transfers']} label="Transfers"
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
                            name={['user', 'CptEvents']} label="Cpt Events"
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
                            name={['user', 'LabEvents']} label="Lab Events"
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
                            name={['user', 'NoteEvents']} label="Note Events"
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
                            name={['user', 'OutputEvents']} label="Output Events"
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
                            name={['user', 'ChartEvents']} label="Chart Events"
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
                            name={['user', 'MicrobiologyEvents']} label="Microbiology Events"
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
            <h1 style={{fontSize:"25px"}}><b>Duration of hospitalization: <i>{aState}</i></b></h1>
        </Card>
    </div>
  );
};

export default AdvancedSearchForm;