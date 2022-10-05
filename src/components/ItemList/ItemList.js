import Item from "../Item/Item"

const ItemList = ({products}) => {
    return (
        <div className="col-md-4">
                {products.map(prod => (               
                    <Item key={prod.id} prod={prod}/>
                ))
                } 
            </div>
    )
}

export default ItemList