import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import user  from "../../images/user.png";
import "../Header/Header.css";


const Header = ()=>{
    const [category, setCategory] = useState("");
    const navigate = useNavigate();

    const handleChange = (e)=>{
        let val = e.target.value;
        setCategory(val);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        localStorage.setItem("Search-Item", category);
        if(category){
            navigate(`/products/category/${category}`);
        }
        else{
            navigate("/");
        }
        
        setCategory("");
    }

    
    

    return (
        <div className="header">
            <Link to="/">
            <div className="logo">MyShop</div>
            </Link>
            <div className="search-bar">
                <input type="text" value={category} placeholder="Search product" onChange={handleChange}/>
                <button type="button" onClick={handleSubmit}><i className="fa fa-search"></i></button>
            </div>
            <div className="user-img">
                <img src={user} alt="user"/>
            </div>
        </div>
    )
}

export default Header;