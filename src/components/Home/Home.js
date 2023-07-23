import React, { useEffect } from "react";
import ProductListing from "../ProductListing/ProductListing";
import { useDispatch } from "react-redux";
import { fetchAsyncProducts } from "../../redux/Slice/productSlice";


const Home = ()=>{

    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(fetchAsyncProducts())
    }, [dispatch])
    return (
        <>
        <div className="banner-img">
            <ProductListing/>
        </div>
        </>
    )
}

export default Home;
