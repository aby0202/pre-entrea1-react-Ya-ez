
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import "./ItemListContainer.css"
import { getProducts } from "../../services/firebase/firestore"
import { useAsync } from "../../hooks/useAsync"

const ItemListContainer = () => {
    const{ categoryId } = useParams()
    const {data:products, error, loading} = useAsync(() => getProducts(categoryId), [categoryId])

    console.log(products)

    if(loading) {
        return <h1 className="loading"> Loading . . .</h1>
    }

    return (
        <div>
            <h1 className="tittle">Productos</h1>
            <ItemList products={products}/>
        </div>
        
    )
}

export default ItemListContainer