import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllProducts } from "../../redux/Slice/productSlice";
import ProductCard from "../ProductCard/ProductCard";
import "../ProductListing/ProductListing.css";


const ProductListing = ()=>{

    const myProducts = useSelector(getAllProducts);
    console.log(myProducts)
    return (
        <div className="product-wrapper">
            <div className="product-list">
                <h2 style={{'color':'white'}}>Products</h2>
                <div className="product-container">
                    {myProducts.map((product, index)=>{
                        return <ProductCard key={index} data={product}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductListing;
