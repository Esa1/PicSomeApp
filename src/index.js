import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import {PicContextProvider} from "./Context"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PicContextProvider>
        <Router>
            <App />
        </Router>
    </PicContextProvider>
);

