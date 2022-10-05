import "./ItemDetail.css"
import Counter from "../Counter/Counter"

const ItemDetail = ({product}) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <img src={product.img} className="card-img-top" alt="..."></img>
                </div>
                <div className="col-md-6 contDetail">
                    <h1>{product.name}</h1>
                    <div className= "prodDetail">
                        <h3>Precio: ${product.price}</h3>
                        <h3> Descripcion: {product.description}</h3>
                        <h3>Agregar al carrito</h3>
                        <Counter/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail