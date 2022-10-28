import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { alertInfo } from "../../SweetAlert/SweetAlert"



const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)
        alertInfo( `Se agregaron correctamente ${quantity} ${name}`)
    }

    const productAddedQuantity = getProductQuantity(id)
    console.log(productAddedQuantity)


 return ( 
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <img src={img} className="card-img-top" alt="..."></img>
                </div>
                <div className="col-md-6 contDetail">
                    <h1 className="name">{name}</h1>
                    <div className= "prodDetail">
                        <h3> Descripcion: {description}</h3>
                        <h3>Precio: ${price}</h3>
                        <footer className='ItemFooter'>
                {
                    quantityToAdd === 0 ? (
                        <ItemCount onAdd={handleOnAdd} stock={stock} initial={productAddedQuantity}/>
                    ) : (
                        <Link to='/cart' className='Option'>Mostrar carrito</Link>
                    )
                }
            </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail




















// const ItemDetail = ({product}) => {
//     return (
//         <div className="container-fluid">
//             <div className="row">
//                 <div className="col-md-6">
//                     <img src={product.img} className="card-img-top" alt="..."></img>
//                 </div>
//                 <div className="col-md-6 contDetail">
//                     <h1>{product.name}</h1>
//                     <div className= "prodDetail">
//                         <h3>Precio: ${product.price}</h3>
//                         <h3> Descripcion: {product.description}</h3>
//                         <button onClick={() => console.log(product)}> Agregar al carrito</button>
//                         <ItemCount/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// 