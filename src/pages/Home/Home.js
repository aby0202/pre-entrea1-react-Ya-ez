import "./Home.css"
import ItemListContainer from "../../components/ItemListContainer.js/itemListContainer";
import { Link } from "react-router-dom" 

const Home = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://drive.google.com/uc?export=view&id=1K8xJy2vzLLQb3xLnJ6eeraqay6uK3H7z" className="card-img-top" alt="nosotras"></img>
                </div>
                <div className="col-md-6 home">
                    <h1>¿Quienes somos?</h1>
                    <p>Adolfina Decoracion surgio como un proyecto de hermanas. Desde chicas nos encantaba coser, diseñar, mezclar texturas y colores</p>
                    <Link to='/nosotras' className="btn">Saber mas</Link>
                </div>
            </div>
    <div><ItemListContainer/></div>
    </div>
    )
}

export default Home