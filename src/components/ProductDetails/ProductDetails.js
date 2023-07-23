import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux"
import { fetchAsyncProductDetails, getSelectedProduct, removeSelectedProduct } from "../../redux/Slice/productSlice";
import { useParams } from "react-router-dom";
import "../ProductDetails/ProductDetails.css";

const ProductDetails = ()=>{
    const { id } = useParams();
    const dispatch = useDispatch();
    const selectedProduct = useSelector(getSelectedProduct)
    useEffect(()=>{
        dispatch(fetchAsyncProductDetails(id))
        dispatch(removeSelectedProduct())
    }, [dispatch, id])
    return (
        <div className="product-section">
            {Object.keys(selectedProduct).length === 0 ? 
            (<div style={{'color':'white'}}>Loading...</div>):
            (
            <>
                <div className="section-left">
                    <div className="product-title">{selectedProduct.title}</div>
                    <div className="product-category">{selectedProduct.category}</div>
                    <div className="product-rating">
                        <span>Ratings <i className="fa fa-star" aria-hidden="true"></i> : {selectedProduct.rating.rate}</span>
                    </div>
                    <div className="product-description">{selectedProduct.description}</div>
                    <div className="product-price">Price : ${selectedProduct.price}</div>
                    <div className="buy-button">
                        <button type="button">Buy Now 👍</button>
                    </div>
                </div>
                <div className="section-right">
                    <img src={selectedProduct.image} alt={selectedProduct.title}/>
                </div>
                </>
                )}
        </div>
    )
}

export default ProductDetails;
