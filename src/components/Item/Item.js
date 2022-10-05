import { Link } from "react-router-dom"

const Item = ({ prod }) => {
    return(
        <div key={prod.id}>
                            <div className="card">
                            <img src={prod.img} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">{prod.name}</h5>
                                <p className="card-text">{prod.price}</p>
                                <Link to={`/detail/${prod.id}`}> Ver detalle </Link>
                            </div>
                            </div>
                    </div>
    )
}

export default Item