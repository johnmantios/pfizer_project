import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "antd";
import Logo from "./logo.png";
import {HomeOutlined} from "@ant-design/icons"

const { Header } = Layout;

const AppHeader = () => (
    <Header style={{backgroundColor: "black", fontSize:"20px"}}>
      <Link to="/">
      <h3><HomeOutlined /> Home</h3>
      </Link>
      <h1><img src={Logo}/></h1>
    </Header>
  );

export default AppHeader;