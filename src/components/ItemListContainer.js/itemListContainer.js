import { useState, useEffect } from "react"
import { getProducts } from "../../AsyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [products, setProducts] = useState ([]) 
    const [loading, setLoading] = useState(true)
    const{ categoryId } = useParams()

    useEffect(() => {
        getProducts(categoryId).then(products => {
            setProducts(products)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    console.log(products)

    if(loading) {
        return <h1> Cargando...</h1>
    }

    return (
        <div>
            <h1>Productos</h1>
            <ItemList products={products}/>
        </div>
        
    )
}

export default ItemListContainer