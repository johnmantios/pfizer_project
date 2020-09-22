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
          Input <Link to="/forms/simple-input" />
        </Item>
        <Item>
          Input and Text Area <Link to="/forms/InputTextArea" />
        </Item>
        <Item>
          Select, radio button and checkbox{" "}
          <Link to="/forms/select-radio-button-checkbox" />
        </Item>
        <Item>
          Form submit (async)
          <Link to="/forms/form-submit-async" />
        </Item>
        
      </SubMenu>
      
      <SubMenu icon={<DotChartOutlined />} title="Charts">
        <Item>
          Demo page 1 <Link to="/charts/demo-1" />
        </Item>
        <Item>
          Demo page 2 (async) <Link to="/charts/demo-2" />
        </Item>
      </SubMenu>
    </Menu>
  </Sider>
);
export default Sidebar;

