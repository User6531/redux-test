import React from 'react';
import MainPage from '../pages/main-page';
import CartPage from '../pages/cart-page';
import AppHeader from '../app-header/app-header';
import { Route } from 'react-router';
import Background from './food-bg.jpg';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader/>
            <Route path='/' exact component={MainPage}/>
            <Route path='/cart' exact component={CartPage}/>
        </div>
    )
}

export default App;