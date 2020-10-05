import React, { useEffect, useState } from "react";
import { Typography, Divider, Row, Col } from "antd";
import Stats from "./components/Stats";
import LineChart from "./components/LineChart";
import AreaChart from "./components/AreaChart";
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
      <Stats />
      <LineChart />
      <AreaChart />
      <Row className="row" gutter={[24, 24]}>
        <BarChart />
        <PieChart />
        <Col sm={{ span: 24 }} lg={{ span: 12 }}></Col>
      </Row>      
    </div>
  );
};

export default DemoPage2;
