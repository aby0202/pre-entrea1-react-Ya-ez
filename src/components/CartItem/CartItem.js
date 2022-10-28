import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css"


const CartItem= ({id, price, name, quantity}) => {

    const{removeItem} = useContext(CartContext)


    return(
        <div className="cartItem">
            <h4>{name}</h4>
            <h4>Precio x u. : {price}</h4>
            <h4>cantidad : {quantity} </h4>
            
                <h4>Total = ${price * quantity} </h4>
                <button className="button" onClick={() => removeItem(id)}>
                    <i className="material-icons">delete</i>
                </button>
           
        </div>
    )

}

export default CartItem