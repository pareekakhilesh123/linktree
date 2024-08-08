import React from 'react';
import './Login.css';
import Input from '../components/Input';


const Login = () => {
    return <>
       <div className="container">
      <div className="left">
        <div className="logo">Linktree</div>
        <h1>Welcome back!</h1>
        <p>Log in to your Linktree.</p>
        <form>
        <Input />

        </form>
         <a href="/">Log in with phone number</a>
      
     
      </div>
      
      <div className="right">
        <img src="" alt="Login Illustration" />
      </div>
    </div>
      
    </>
}

export default Login