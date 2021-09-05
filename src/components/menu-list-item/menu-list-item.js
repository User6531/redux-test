import React from 'react';
import './menu-list-item.scss';
import {addItemToCart} from '../actions/actions';
import { useDispatch } from 'react-redux';



const MenuListItem = ({item}) => {
    const {category, price, title, url: imgUrl, id} = item;

    const dispatch = useDispatch();

    return (
        <li className="menu__item">
            <div className="menu__title">{title}</div>
            <img className="menu__img" src={imgUrl} alt="Cesar salad"></img>
            <div className="menu__category">Category: <span>{category}</span></div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <button onClick={() => dispatch(addItemToCart(id))} className="menu__btn">Add to cart</button>
        </li>
    )
}

export default MenuListItem;