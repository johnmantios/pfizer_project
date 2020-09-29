import React, { useState, useEffect } from "react";
import { Typography, Col, Card, Spin } from "antd";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart as RechartsBarChart,
  Bar,
} from "recharts";
import { getBarChartData } from "./api";

const { Title } = Typography;

const BarChart = () => {
  const [barChartData, setBarChartData] = useState([]);

  useEffect(() => {
    getBarChartData().then((data) => {
      setBarChartData(data);
    });
  }, []);

  return (
    <Col sm={{ span: 48 }} lg={{ span: 24 }}>
      {barChartData.length ? (
        <div className="chart-container">
          <Title level={4}>My super bar chart</Title>
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
                <XAxis dataKey="make" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="size" fill="#8884d8" />
                
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

export default BarChart;
