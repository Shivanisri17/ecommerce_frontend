import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CartBtn = ()=> {
    //we get a state of add items
    const state = useSelector((state)=> state.addItem)
    return(
        <>

         <NavLink to="/cart" className=" btn btn-outline-dark primary ms-2 "> 

<span className="fa fa-shopping-cart me-1"> </span> Cart({state.length})
</NavLink>


        </>
    )
}

export default CartBtn;