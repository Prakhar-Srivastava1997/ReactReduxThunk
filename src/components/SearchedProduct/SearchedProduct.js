import React, { useEffect }from "react";
import { useSelector } from "react-redux";
import { getSearchedProducts } from "../../redux/Slice/productSlice";
import ProductCard from "../ProductCard/ProductCard";
import { fetchAsyncSearchedProducts } from "../../redux/Slice/productSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const SearchedProduct = ()=>{
    const { category } = useParams();
    const searchedProductsArray = useSelector(getSearchedProducts)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    console.log("Parameter : ", category)
    useEffect(()=>{
        if(localStorage.getItem("Search-Item")){
            let cat = localStorage.getItem("Search-Item")
            dispatch(fetchAsyncSearchedProducts(cat));
            
        }
        else{
            navigate("/");
        }
    }, [category])
    console.log("Searched Prducts : ",searchedProductsArray)
    return (
        <>
        <div className="product-wrapper">
            <div className="product-list">
                <h2 style={{'color':'white', 'text-transform':'capitalize'}}>{category}-Products</h2>
                <div className="product-container">
                    {searchedProductsArray.length>0 ? (searchedProductsArray.map((product, index)=>{
                        return <ProductCard key={index} data={product}/>
                    })):(<h2 style={{'color':'white', 'text-transform':'capitalize'}}>No results found for your search....</h2>)}
                </div>
            </div>
        </div>
        </>
    )
}

export default SearchedProduct;