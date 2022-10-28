import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
// import { getProduct } from "../../AsyncMock"
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"

import{ getDoc,doc }from 'firebase/firestore'
import { db } from '../../services/firebase'


const ItemDetailContainer = ({setCart}) => {
    const[product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect(() =>{

        const docRef= doc(db, 'products', productId)

        getDoc(docRef).then(doc => {

            const data= doc.data()

            const productsAdapted = {id: doc.id, ...data}

            setProduct(productsAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })


        // getProduct(productId).then(product => {
        //     setProduct(product)
        // }).finally(() => {
        //     setLoading(false)
        // })
    }, [productId])

    console.log(product)

    if(loading){
        return <h1 className="loading">loading . . .</h1>
    }

    return(
        <div className="detail">
            <h1 className="detailTitle">DETALLE DEL PRODUCTO</h1>
            <div className="detail-prod">
                <ItemDetail {...product} setCart={setCart}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer