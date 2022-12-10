import React,{ useState } from'react';
import "./Register.css"
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Register=()=>{
    const [fullName,setFullName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate = useNavigate();

    const auth=localStorage.getItem("e-user");
    if(auth){
        navigate("/");
    }
    const userRegister=(e)=>{
        e.preventDefault();
        const obj={fullName,email,password};
        axios.post("http://localhost:4000/signIn",obj);     
        navigate("/");
        localStorage.setItem("e-user",JSON.stringify(obj));
    }
    return(
        <>
            <div >
                <h1 className='textCenter'> User Register</h1>
                <form onSubmit={userRegister} className='flex'>
                    <input type="text" className="inputBox" valur={fullName} onChange={(e)=>{setFullName(e.target.value)}} placeholder='Enter Name'required/>
                    <input type="email" className="inputBox" valur={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email Address' required/>
                    <input type="password" className="inputBox" valur={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' required/>
                    <button className="signInButton" type="submit">Register</button>
                </form>
            </div>
        </>
    )
};

export default Register;