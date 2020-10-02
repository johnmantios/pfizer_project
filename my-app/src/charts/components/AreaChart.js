
import React, { useState, useEffect } from "react";
import { Typography, Col, Card, Spin } from "antd";
import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie, Legend, Cell, Tooltip
} from "recharts";
import { getAreaChartData } from "./api";
// import Cell from '@bit/recharts.recharts.cell';

const COLORS = ["#00846b", "#6a0084"]

const { Title } = Typography;

const PieChart2 = () => {
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    getAreaChartData().then((data) => {
      setPieChartData(data);
    });
  }, []);

  return (
    <Col sm={{ span: 24 }} lg={{ span: 12 }}>
      {pieChartData.length ? (
        <div className="chart-container">
          <Title style={{textAlign:"center"}} level={4}>Mean Hospitalization Time Based On Admission Procedure</Title>
          <div className="chart-inner">
            <ResponsiveContainer>
              <RechartsPieChart>
                <Pie
                  data={pieChartData}
                  dataKey="hospitalization"
                  nameKey= "admission_procedure"
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

export default PieChart2;
