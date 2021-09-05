import React from 'react';
import {connect} from 'react-redux';
import { delleteItemFromCart } from '../actions/actions';
import './cart-table.scss';

const CartTable = ({itemsCart, delleteItemFromCart, amount}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    itemsCart.map(item=>{
                        const {price, title, url: imgUrl, id} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={imgUrl} className="cart__item-img" alt="Cesar salad"></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">(x{amount}) &emsp;&emsp; {price}$</div>
                                <div 
                                    className="cart__close"
                                    onClick={()=> delleteItemFromCart(id)}
                                >&times;</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        itemsCart: state.itemsCart,
        amount: state.amount,
    }
};
const mapDispatchToProps = {
    delleteItemFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);