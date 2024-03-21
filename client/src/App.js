import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'antd/dist/reset.css';
import { Button} from 'antd';
import {Navigate, BrowserRouter, Route , Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Test from "./pages/Test";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
           <Route path='/test' element={<ProtectedRoute><Test/></ProtectedRoute>}/>
           <Route path='/Login' element={<Login/>}/>
           <Route path='/Register' element={<Register/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export function ProtectedRoute(props){  //protectedroutes are accessible to only registred users while non protected are accessible to everone 
 
  if(localStorage.getItem('sheymoney-users')){

    return props.children
  }else{
    return <Navigate to= '/login'/>
  }

}

export default App;
