import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const Product = () => {
    const [product,setProduct]=useState();
    const [categary,setCategary]=useState();
    const [price,setPrice]=useState();
    const [company,setCompany]=useState();

    const userEmailId=JSON.parse(localStorage.getItem("e-user")).email;
    const productData=(e)=>{
        e.preventDefault();  
        const productObj={
            product:product,
            categary:categary,
            price:price,
            company:company,
            emailId:userEmailId
        };
        axios.post("http://localhost:4000/addProduct",productObj);
        alert("Product Add Successfully");
        window.location.reload();
    }

    return (
        <div>
            <h1 className='textCenter'>Add Product</h1>
            <form onSubmit={productData} className='flex'>
                <input type="text" className="inputBox" value={product} onChange={(e)=>{setProduct(e.target.value)}} placeholder='Enter Product Name'required/>

                <input type="text" className="inputBox" value={categary} onChange={(e)=>{setCategary(e.target.value)}} placeholder='Enter Categary' required/>

                <input type="number" className="inputBox" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder='Enter Price' required/>

                <input type="text" className="inputBox" value={company} onChange={(e)=>{setCompany(e.target.value)}} placeholder='Enter Company' required/>

                <button className="signInButton" type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default Product;