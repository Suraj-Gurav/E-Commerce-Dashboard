import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const Login = () => {  
    const [dbData, setDbData]=useState([]);
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [message,setMessage]=useState();
    const [messagePass,setMessagePass]=useState();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate=useNavigate();

    useEffect((req,res)=>{
        axios.get("http://localhost:4000/logIn")
        .then(async (res)=>{
            const data= await res.data;
            setDbData(data);  
        })
        .catch(err=>{res.json(err)})
    },[]);  
    
    // const auth=localStorage.getItem("e-user");
    // if(auth){
    //     navigate("/");
    // }
    
    const login=(e)=>{
    e.preventDefault();
    const formData ={
        email:email,
        pass:password
    };
    localStorage.setItem("e-user",JSON.stringify(formData));
    console.log(formData.email);
    dbData.map(row => {
        if (row.email === formData.email){      
            if (row.password !== formData.pass) { 
                setMessagePass("Invalid password");   
            } else {
              setIsSubmitted(true);
              alert("Login Successfully"); 
            }
          } else {
            setMessage("Invalid User"); 
          }
    });         
};

const renderForm = (
            <div>
                <h1 className='textCenter'> User Login</h1>
                <form onSubmit={login} className='flex'>
                <input type="email" className="inputBox" value={email} 
                    onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email Address' required/>
                    <label className='message'>{message}</label>
                <input type="password" className="inputBox" value={password} 
                    onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' required/>
                    <label className='message'>{messagePass}</label>
                <button type="submit" className="loginButton">Login</button>
                </form>
            </div>
);
    return(
        <>
            {isSubmitted  ? navigate("/") : renderForm}
        </>
    )
};

export default Login;