import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Navbar.css'

const Navbar=()=>{
    const auth=localStorage.getItem("e-user");
    const navigate=useNavigate();
    const loginOut=()=>{
        localStorage.clear();
        navigate("/signIn")
    }
    return(
        <div className='navbar'>
            <img src="https://cc-prod.scene7.com/is/image/CCProdAuthor/mascot-logo-design_P1_900x420?$pjpeg$&jpegSize=200&wid=900" alt="logo" className='logo'/>
            {
                auth ?  <ul className='list'>
                            <li><Link to="/">Product</Link></li>
                            <li><Link to="/add">Add Product</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link onClick={loginOut} to="/signIn">LogOut({JSON.parse(auth).email})</Link></li>
                        </ul>  
                    :
                        <ul className='list text-right'>
                            <li><Link to="/signIn">Register</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                 }
        </div>
    )
};

export default Navbar;