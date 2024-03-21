import {Form} from 'antd'
import Input from 'antd/lib/input/Input'
import { Link } from 'react-router-dom';
import '../resources/authentication.css'
import axios from 'axios'
import { message } from 'antd/lib';
import Spinner from "../components/Spinner"
import React , {Component, useState} from 'react';

function Register() {
    const [loading, setLoading] = useState(false);
    const onFinish = async (values)=>{
       try{
            setLoading(true)
            await axios.post('/api/users/register',values)
            message.success("Registration Successfull")
            setLoading(false)
       }   catch(error){
            setLoading(false)
            message.error("something went wrong")
       }
    }
  return (
    <div className= "register">
      {loading && <Spinner/>}
        <div className= "row justify-content-center align-items-center w-100 h-100">
            
             

            <div className= "col-md-4">
                <Form layout="vertical" onFinish={onFinish}>
                     <h1>SHEY-MONEY / REGISTER</h1>
                     <hr/>
                    <Form.Item label='Name' name ='name'>
                      
                        <Input/>
                    </Form.Item>


                    <Form.Item label='Email' name='email'>
                            <Input/>
                    </Form.Item>

                    <Form.Item label='Password' name='password'>
                           <Input type='password'/>
                    </Form.Item>
                    
                    <div className = "d-flex justify-content-between align-items-center">
                        <Link to='/login'>Already Registered , Click Here To login</Link>
                        <button className ="primary" type="submit" >REGISTER</button>
                    </div>
                    
                </Form>   
                    
                 
            </div>

               <div className= "col-md-5">
                 <div className ="dotlottie">
                 <dotlottie-player src="https://lottie.host/1bf23ac7-57d1-43af-a693-cac4acfab01a/WycKf7Xqq1.json" 
                     background="transparent" 
                     speed="1"
                     loop 
                    autoplay>

                 </dotlottie-player>
                 </div>
               </div>
             
         
        </div>

    </div>     
  )
}

export default Register