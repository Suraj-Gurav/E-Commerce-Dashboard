import axios from 'axios';
import React, {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";

const Update = () => {
    const [product,setProduct]=useState();
    const [categary,setCategary]=useState();
    const [price,setPrice]=useState();
    const [company,setCompany]=useState();
    const userEmailId=JSON.parse(localStorage.getItem("e-user")).email;
    const params=useParams();
    const navigate = useNavigate();

   useEffect(()=>{
    updateProduct();
   },[]);
   
    const updateProduct = ()=>{
        axios.get(`http://localhost:4000/product/${params.id}`)
        .then(async (res)=>{
            const datails = await res.data;
            setProduct(datails.product);
            setCategary(datails.categary);
            setPrice(datails.price);
            setCompany(datails.company);   

        }).catch(err=>{
            console.log(err);
        });
    };
    const updateData=(e)=>{
        e.preventDefault();  
        const productObj={
            product:product,
            categary:categary,
            price:price,
            company:company,
            emailId:userEmailId
        };
        axios.put(`http://localhost:4000/product/${params.id}`,productObj);
        alert("Product Update Successfully");   
        navigate("/");
    }

    return (
        <div>
            <h1 className='textCenter'>Update Product</h1>
            <form onSubmit={updateData} className='flex'>
                <input type="text" className="inputBox" value={product} onChange={(e)=>{setProduct(e.target.value)}} placeholder='Enter Product Name'required/>

                <input type="text" className="inputBox" value={categary} onChange={(e)=>{setCategary(e.target.value)}} placeholder='Enter Categary' required/>

                <input type="number" className="inputBox" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder='Enter Price' required/>

                <input type="text" className="inputBox" value={company} onChange={(e)=>{setCompany(e.target.value)}} placeholder='Enter Company' required/>

                <button type="submit" className="signInButton" >Add Product</button>
            </form>
        </div>
    );
};

export default Update;