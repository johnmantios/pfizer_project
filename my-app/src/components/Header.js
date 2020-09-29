import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "antd";
import Logo from "./logo.png";


const { Header } = Layout;

const AppHeader = () => (
    <Header style={{backgroundColor: "black", fontSize:"20px"}}>
      <Link to="/">
      <h3>Home</h3>
      </Link>
      <h1><img src={Logo}/></h1>
    </Header>
  );

export default AppHeader;