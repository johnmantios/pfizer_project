import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {DotChartOutlined} from "@ant-design/icons"
import {ExperimentOutlined} from "@ant-design/icons"
import {TeamOutlined} from "@ant-design/icons"


const { Sider } = Layout;
const { Item } = Menu;


const Sidebar = () =>  (

    <Sider>
    <Menu mode="inline" style={{ height: "100%" ,backgroundColor:"rgb(227, 228, 228)"}}>
      <Item icon={<TeamOutlined />}>
        <b>About us</b>
        <Link to="/about"/>
      </Item>
      <Item icon={<ExperimentOutlined />}>
        <b>Prediction</b>
        <Link to="/form"/>  
      </Item>
      
      <Item icon={<DotChartOutlined />}>
          <b>Charts</b>
          <Link to="/charts"/>
      </Item>
    </Menu>
  </Sider>
);
export default Sidebar;

