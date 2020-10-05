import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import TeamMembers from "./components/TeamMembers";
import Intro from "./components/Intro";
import DemoPage2 from "./charts/DemoPage2"
import { Layout } from "antd";
import New from "./forms/New";


const {Content} = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <Header/>
        <Layout>
          <Sidebar/>
          <Content className="main-container">
            <div className="content">
              <Switch>
                <Route exact path="/" component={Intro}/>
                <Route exact path="/about" component={TeamMembers}/>
                <Route exact path="/form" component={New}/>
                <Route exact path="/charts" component={DemoPage2}/>
                
              </Switch>
            </div>            
          </Content>
        </Layout>
      </Layout>
      <Footer/>
    </Router>
  );
};



export default App;
