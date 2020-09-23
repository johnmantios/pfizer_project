import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {DotChartOutlined} from "@ant-design/icons"
import {ExperimentOutlined} from "@ant-design/icons"

const { Sider } = Layout;
const { SubMenu, Item } = Menu;


const Sidebar = () =>  (

    <Sider width={200}>
    <Menu mode="inline" style={{ height: "100%" }}>
      <SubMenu icon={<ExperimentOutlined />} title="Patient form">
        
        
        <Item>
          Form submission
          <Link to="/forms/form-submit-async" />
        </Item>
        
      </SubMenu>
      
      <SubMenu icon={<DotChartOutlined />} title="Charts">
        <Item>
          Useful insights <Link to="/charts/demo-1" />
        </Item>
        
      </SubMenu>
    </Menu>
  </Sider>
);
export default Sidebar;

