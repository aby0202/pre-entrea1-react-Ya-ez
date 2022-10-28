import React from "react";
import { useContext} from 'react'
import { CartContext} from "../../context/CartContext"
import  CartItem  from "../CartItem/CartItem"
import "./Cart.css"
import { alertConfirm } from "../../SweetAlert/SweetAlert";

const Cart = () => {

    const {cart,getTotalQuantity,totalCart,clearCart} = useContext(CartContext);

    const totalQuantity = getTotalQuantity();

    if(totalQuantity === 0) return <h1 className="tittle">No hay items en el carrito</h1>

    const alert= () => {
        alertConfirm(`La compra se  realizo correctamente`)
    }


    
  return (
    <div className="cart">
        {cart.map(prod=>(
            <CartItem key={prod.id} {...prod} />
        ))}
        <h3>Total: {totalCart} </h3>
        <div style={{display:'flex', justifyContent:'center',margin:'20px'}}>
          <div>

        <button className="buttonCart" onClick={() => clearCart()}>Limpiar Carrito</button>
          <button className="buttonCart" onClick={alert}>
            finalizar compra
          </button>
        </div>
        </div>
    </div>
  )
}

export default Cart