import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import DATA from "../Data";
import { useDispatch } from "react-redux";
import {addItem, delItem} from "../redux/actions/index";

const ProductDetail=()=>
{
    const [cartBtn, setCartBtn] = useState("Add to Cart")
    const proid = useParams();
    const proDetail = DATA.filter(x =>x.id == proid.id)
    const product = proDetail[0];
    console.log(product);

    const dispatch = useDispatch()

    const handleCart = (product) => {
if(cartBtn === "Add to Cart") {
    dispatch(addItem(product))
    setCartBtn("Remove from Cart")
}
else{
    dispatch(delItem(product))
    setCartBtn("Add to Cart")
}
    }

    return(
       <>
       <div className="container my-5 py-3">
        <div className="row">
        <div className="col-md-6 d-flex justify-content-center mx-auto product">

            <img src={product.img} style={{width: "25rem", marginTop:"22px"}} alt={product.title}></img>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">₹{product.price}</h2>
           <h4> <i className="fa fa-star dot my-2 me-2" ></i>
           <i className="fa fa-star dot my-2 me-2" ></i>
           <i className="fa fa-star dot my-2 me-2" ></i>
           <i className="fa fa-star dot my-2 me-2" ></i>
           <i className="fa fa-star dot my-2 me-2" ></i>
           </h4>
        
            <p className="lead">{product.desc}</p>
            <button onClick={()=>handleCart(product)} className="btn btn-outline-dark my-5">{cartBtn}</button>
        </div>
        </div>
        </div>
       
       </>
    )
}

export default ProductDetail;