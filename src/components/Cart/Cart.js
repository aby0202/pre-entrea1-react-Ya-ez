import React from "react";
import { useContext} from 'react'
import { CartContext} from "../../context/CartContext"
import  CartItem  from "../CartItem/CartItem"
import "./Cart.css"
import { Link } from "react-router-dom";


const Cart = () => {

    const {cart,getTotalQuantity,totalCart,clearCart} = useContext(CartContext);

    const totalQuantity = getTotalQuantity();

    if(totalQuantity === 0) return <h1 className="tittle">No hay items en el carrito</h1>

  return (
    <div className="cart">
        {cart.map(prod=>(
            <CartItem key={prod.id} {...prod} />
        ))}
        <h3>Total: {totalCart} </h3>
        <div style={{display:'flex', justifyContent:'center',margin:'20px'}}>
          <div>

        <button className="buttonCart" onClick={() => clearCart()}>Limpiar Carrito</button>
        <Link to='/Checkout' className="buttonCart">Checkout</Link>
        </div>
        </div>
    </div>
  )
}

export default Cart