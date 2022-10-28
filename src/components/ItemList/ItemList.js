import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({products}) => {
    return (
        <div>
            <div className="productsContainer">
                {products.map(prod => (               
                    <Item key={prod.id} prod={prod}/>
                ))
                } 
            </div>
            </div>
    )
}

export default ItemList