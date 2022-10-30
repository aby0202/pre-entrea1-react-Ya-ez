
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductsById } from "../../services/firebase/firestore"
import { useAsync } from "../../hooks/useAsync"


const ItemDetailContainer = ({setCart}) => {
    const {productId} = useParams()
    const {data:product, error, loading} = useAsync(() =>  getProductsById(productId), [productId])

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