
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {  faBasketShopping} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./CartWidget.css"

const CartWidget = () => {

    const {getTotalQuantity} = useContext(CartContext)

    const totalQuantity = getTotalQuantity()

    return (
        <div>
            <Link to='/cart' className='Cart'>
                <FontAwesomeIcon icon={faBasketShopping} className="basketShopping"/>
                {totalQuantity}
            </Link>
        </div>
    )

}

export default CartWidget