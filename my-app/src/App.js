import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import DemoPage2 from "./charts/DemoPage2"

import FormSubmit from "./forms/FormSubmit"

import { Layout } from "antd";

import './App.css';


const {Content} = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="layout-container">
        <Header />
        <Layout>
          <Sidebar />
          <Content className="inner-content">
            <Switch>
              
              
              
              <Route
                exact
                path="/forms/form-submit-async"
                component={FormSubmit}
              />
              
              <Route exact path="/charts/demo-2" component={DemoPage2} />



            </Switch>
            
          </Content>

          
        </Layout>
        
      </Layout>
      <Footer/>
    </Router>
  );
};



export default App;
