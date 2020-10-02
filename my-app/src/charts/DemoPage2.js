import React, { useEffect, useState } from "react";
import { Typography, Divider, Row, Col } from "antd";
// import Stats from "./components/Stats";
import BarChart2  from "./components/LineChart";
import PieChart2 from "./components/AreaChart";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import "./styles.css";
import Texty from 'rc-texty';

const { Title } = Typography;

const DemoPage2 = () => {
  return (
    <div className="demo-container">
      <b><Texty style={{textAlign:"center", fontSize:"30px"}}>Useful Insights</Texty></b>
      <Divider />
      {/* <Stats /> */}
      <BarChart2/>
      {/* <LineChart /> */}
      <PieChart />
      <Row className="row" gutter={[24, 24]}>
        <BarChart />
        <PieChart2 />
        <Col sm={{ span: 24 }} lg={{ span: 12 }}></Col>
      </Row>      
    </div>
  );
};

export default DemoPage2;
