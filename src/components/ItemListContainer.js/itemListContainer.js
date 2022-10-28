import { useState, useEffect } from "react"
// import { getProducts } from "../../AsyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import "./ItemListContainer.css"

import { getDocs, collection, query, where} from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = () => {
    const [products, setProducts] = useState ([]) 
    const [loading, setLoading] = useState(true)
    const{ categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef =categoryId
        ? query(collection( db, 'products'), where('category', '==', categoryId)) : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            console.log(response)

            const productsAdapted = response.docs.map(doc => {
                const data= doc.data()
                return { id: doc.id, ...data}
            })

            setProducts(productsAdapted)
        }).finally(() => {
            setLoading(false)
        })
        // getProducts(categoryId).then(products => {
        //     setProducts(products)
        // }).finally(() => {
        //     setLoading(false)
        // })
    }, [categoryId])

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