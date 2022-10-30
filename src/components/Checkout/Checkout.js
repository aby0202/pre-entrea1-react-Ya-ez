import React from "react";
import Formulario from "../Form/Form";
import { useContext} from 'react'
import { CartContext} from "../../context/CartContext"
import "./Checkout.css"
import { db } from '../../services/firebase'
import{addDoc, collection} from 'firebase/firestore'





const Checkout = () => {

    const {cart, totalCart, clearCart} = useContext(CartContext);


    const createOrder = async(buyer) => {
        const objectOrder = {
        buyer,
        items:cart,
        total: totalCart
    }
    console.log(objectOrder)

    const collectionReference = collection(db, 'orders')

    addDoc(collectionReference, objectOrder)

    clearCart()

    }

    

    return(
        <div>
            <div className="row">
            <div className="col-md-6">
            <h3 className="total">Total a pagar: {totalCart} </h3>
            </div>
            <div className="col-md-6">
                <h1 className="datos">Datos de envio </h1>
                <Formulario createOrder={createOrder}/>
            </div>
            </div>
        </div>  
    )
}

export default Checkout