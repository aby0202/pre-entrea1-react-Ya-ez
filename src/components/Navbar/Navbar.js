import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import "./Navbar.css"


const Navbar= () => {
    return(   
        <div>
            <nav className='navbar navbar-expand-md  navbar-dark navstyle'>
                <a className='navbar-brand brand' href="#">Adolfina Decoracion</a>
                
        <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse p-3 justify-content-center' id="collapsibleNavbar">
            <ul className='navbar-nav'>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Home</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Nosotras</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Productos</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link' href="#">Contacto</a>
                </li>
            </ul>
        </div>
        <CartWidget/>
    </nav>
    
        </div>
    )
}


export default Navbar