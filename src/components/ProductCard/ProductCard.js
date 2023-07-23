import React from "react";
import "../ProductCard/ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = (props)=>{
    const {data} = props;
    return (
        <div className="card-item">
            <Link to={`/products/${data.id}`}>
            <div className="card-inner">
                <div className="card-top">
                    <img src={data.image} alt={data.title}/>
                </div>
                <div className="card-bottom">
                    <div className="card-info">
                        <h3 style={{'color':'white'}}>{data.title}</h3>
                        <p style={{'color':'white'}}>${data.price}</p>
                        <p style={{'color':'white'}}>{data.rating.rate}</p>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default ProductCard;
