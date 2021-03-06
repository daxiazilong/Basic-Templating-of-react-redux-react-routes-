import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import handleInput from './redux/reducer';


let store = createStore(handleInput);



ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
            
        </BrowserRouter>
    </Provider>  
), document.getElementById('root'));
registerServiceWorker();
