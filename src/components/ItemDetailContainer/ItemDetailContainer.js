import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "../../AsyncMock"
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const[product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect(() =>{
        getProduct(productId).then(product => {
            setProduct(product)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    console.log(product)

    if(loading){
        return <h1>Cargando...</h1>
    }

    return(
        <div className="detail">
            <h1 className="detailTitle">DETALLE DEL PRODUCTO</h1>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer