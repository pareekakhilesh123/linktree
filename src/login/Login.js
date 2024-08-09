import React, {useState} from 'react';
import './Login.css';
import Input from '../components/Input';
import Button from '../components/Button';
import { useNavigate} from 'react-router-dom'

const Login = () => { 
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [emailError,setEmailError] = useState(false)
    const [passwordError,setPasswordError] = useState(false)

    const navigate = useNavigate();
    function handleClick(e) {
        e.preventDefault()
        if(email.length === 0){
            setEmailError(true)
        }
        if(password.length === 0){
            setPasswordError(true)
        }
       else {
        navigate("/Profile")
       }
    }

    function onEmailChange(e){
        const value = e.target.value
        setEmailError(false)
        setEmail(value)
    }
    function onPasswordChange(e){
        const value = e.target.value
        setPasswordError(false)
        setPassword(value)
    }
    return (
        <div className="container">
            <div className="left">
                <div className="logo">Linktree</div>
                <h1>Welcome back!</h1>
                <p>Log in to your Linktree.</p>
                <form>
                    <Input type={"Email"} placeholder={"Enter Email Id"} onChange={onEmailChange} value={email}/>
                       {emailError && <span>Please enter an email </span>}
                     <br/>
                    <Input type={"Password"} placeholder={"Enter Password"}  onChange={onPasswordChange} value={password} />
                       {passwordError && <span>Please enter your password</span>}
                    <Button bName="Log in" onClick={handleClick}/>
                    </form>
            </div>
            
            <div className="right">
                <img src='./login.png' alt="Login Illustration"></img>
            </div>
        </div>
    );
}

export default Login;
