import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import InputTextArea from "./forms/InputTextArea";
import { Layout } from "antd";

import './App.css';


const {Content} = Layout;

const App = () => {
  return (
    
    <Router>

      <Header/>
      
    
    <Sidebar/>
     
    <Footer/>

    </Router>
  );
}


export default App;
