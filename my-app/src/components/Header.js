import React from "react";
import { Layout } from "antd";

const { Header } = Layout;

const AppHeader = () => (
  <Header className="header" style={{backgroundColor: "#00AFF0"}}>
    <h1 style={{color: "white"  ,position: "sticky", bottom: "0"}}>Our Pfizer Data Science Final Project</h1>
  </Header>
);

export default AppHeader;