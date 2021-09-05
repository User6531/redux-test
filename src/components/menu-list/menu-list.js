import React from 'react';
import MenuListItem from '../menu-list-item/menu-list-item';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useContext } from 'react';
import Context from "../context/context";
import {menuLoaded, menuLoading, menuError} from '../actions/actions';
import Spinner from '../spinner/spinner';
import './menu-list.scss';

function MenuList() {
  
    const menuList = useSelector(state => state.menu);
    const loading = useSelector(state => state.loading);

    const {service} = useContext(Context);
    
    const dispatch = useDispatch();

    useEffect (()=> {
        dispatch(menuLoading());
        
        service.getMenu()
        .then(res=> {
            dispatch(menuLoaded(res));
        })
        .catch(res=> {
            dispatch(menuError());
            console.error(res);
        });
    }, [dispatch, service]);

    if (loading) {
        return <Spinner/>
    }
    return (
        <ul className="menu__list">
            {menuList.map(item=> {
                const {id} = item;
                return <MenuListItem key={id} item={item}/>
            })}
        </ul>
    )
}

export default MenuList;