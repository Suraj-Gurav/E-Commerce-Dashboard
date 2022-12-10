import axios from "axios";
import React,{ useState} from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductList=()=>{
    const [product,setProduct]=useState([]);
    useEffect(()=>{
        getProduct();
    },[]);

    const getProduct=()=>{
        axios.get("http://localhost:4000/product")
        .then(async (res)=>{
            const list=await res.data;
            setProduct(list);
        }).catch(err=>{
            console.log(err);
        })
    }
    const deleteItem=(id)=>{
        axios.delete(`http://localhost:4000/product/${id}`);
        alert("Delete Product Successfully");
        getProduct();
    }
    const searchProduct = async (e)=>{   
        let key= e.target.value;
        if(key){
            await axios.get(`http://localhost:4000/search/${key}`)
            .then(async (res)=>{
                const search = await res.data;
                setProduct(search);
            }).catch(err=>{
                console.log(err);
            });
        }else{
            getProduct();  
        }
           
    }
    return(
        <>
            <div className="listCenter">
                <input type="text" onChange={searchProduct} className="searchBox" placeholder="Search Product" />
                <div className="Product-List">
                <ul>
                    <li>Sr.no</li>
                    <li>Name</li>
                    <li>Categary</li>
                    <li>Price</li>
                    <li>Company</li>
                    <li>Operation</li>
                </ul>
                {
                 product.map((row,index)=>{
                        return(
                            <>
                                <ul>
                                    <li>{index+1}</li>
                                    <li>{row.product}</li>
                                    <li>{row.categary}</li>
                                    <li>{row.price}</li>
                                    <li>{row.company}</li>
                                    <li>
                                        <button onClick={()=>{deleteItem(row._id)}}>Delete</button>
                                        <Link to={`update/${row._id}`}>Update</Link>
                                    </li>
                                </ul>
                            </>
                        )
                    })
                }
                </div>
            </div>
        </>
    )
};

export default ProductList;