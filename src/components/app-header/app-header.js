import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';

const AppHeader = () => {

    const totalPrice = useSelector(state => state.totalPrice);


    return (
        <header className="header">
            <Link to='/' className="header__link">
                Menu
            </Link>
            <Link to='/cart' className="header__link">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {totalPrice} $
            </Link>
        </header>
    )
};

export default AppHeader;