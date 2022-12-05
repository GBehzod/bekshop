import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import store from './store'
import './index.css';
import "./bootstrap.min.css"
import App from './App.jsx';
import {BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)
