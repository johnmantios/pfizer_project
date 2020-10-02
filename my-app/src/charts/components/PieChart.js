import React, { useState, useEffect } from "react";
import { Typography, Col, Card, Spin } from "antd";
import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie, Legend, Cell, Tooltip
} from "recharts";
import { getPieChartData } from "./api";
// import Cell from '@bit/recharts.recharts.cell';

const COLORS = ["#00846b", "#6a0084", "#840018", "#CCCC00","#280084"]

const { Title } = Typography;

const PieChart = () => {
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    getPieChartData().then((data) => {
      setPieChartData(data);
    });
  }, []);

  return (
    <Col sm={{ span: 24 }} lg={{ span: 12 }}>
      {pieChartData.length ? (
        <div className="chart-container">
          <Title level={4}>My super pie chart</Title>
          <div className="chart-inner">
            <ResponsiveContainer>
              <RechartsPieChart>
                <Pie
                  data={pieChartData}
                  dataKey="size"
                  nameKey= "Hospitalization2"
                  outerRadius={100}
                  label
                  >
                  {
                    pieChartData.map((entry,index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>)
                  }
                </Pie>
                <Legend/>
                <Tooltip/>
              </RechartsPieChart>
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

export default PieChart;
