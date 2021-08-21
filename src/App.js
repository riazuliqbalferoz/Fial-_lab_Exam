import React from "react";
import './App.css';
//import {Button} from 'react-bootstrap'
//import {BrowserRouter} from 'react-router-dom'
//import {Route} from 'react-router-dom';

import Header from './Header'
import Login from './Login'
import Register from './Register'
import Edit from './Edit'
import SearchUser from './SearchUser'
import Addjob from './Addjob'

function App() {
  return (
  <div className="App">
    
    
  <Header/>
    <h1>Welcome to Job Portal</h1>
    <Login/>
    <Register/>
    <Edit/>
    <SearchUser/>
   < Addjob/>
    </div>
   
  );
}

export default App;
