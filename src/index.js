import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import {PicSomeProvider} from "./components/usePicSome"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PicSomeProvider>
        <Router>
            <App />
        </Router>
    </PicSomeProvider>
);

