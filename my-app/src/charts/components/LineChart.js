import React, { useState, useEffect } from "react";
import { Typography, Col, Card, Spin } from "antd";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  BarChart as RechartsBarChart,
  Bar,
} from "recharts";
import { getLineChartData } from "./api";

const { Title } = Typography;

const COLORS = ["#00846b", "#6a0084", "#840018", "#CCCC00", "pink", "orange"]

const BarChart2 = () => {
  const [barChartData, setBarChartData] = useState([]);

  useEffect(() => {
    getLineChartData().then((data) => {
      setBarChartData(data);
    });
  }, []);

  return (
    <Col sm={{ span: 36 }} lg={{ span: 24 }}>
      {barChartData.length ? (
        <div className="chart-container">
          <Title style={{textAlign:"center"}} level={4}>Mean Hospitalization Time Based On Insurance</Title>
          <div className="chart-inner">
            <ResponsiveContainer>
              <RechartsBarChart
                data={barChartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey=" insurance" />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Bar dataKey="hospitalization" fill="#8884d8">
                {
                  barChartData.map((entry,index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>)
                }
                </Bar>
                <Bar dataKey=" insurance" fill="#82ca9d" />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : (
        <Card style={{ display: "flex", justifyContent: "center" }}>
          <Spin size="large" />
        </Card>
      )}
    </Col>
  );
};

export default BarChart2;
