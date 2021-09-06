import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import ErrorBoundry from './components/error-boundry/error-boundry';
import { Provider } from 'react-redux';
import Context from "./components/context/context";
import {BrowserRouter as Router} from 'react-router-dom';
import store from './components/store/store';
import Service from './Services/service';

import './index.scss';

const service = new Service();


ReactDOM.render(    
    <Provider store={store}>
        <ErrorBoundry>
            <Context.Provider value={{service}}>
                <Router>
                    <App/>
                </Router>
            </Context.Provider>
        </ErrorBoundry>
    </Provider>
,document.getElementById('root'));


