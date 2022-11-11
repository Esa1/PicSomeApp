import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App />
    </Router>
);


/*
import React from "react"
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import "./styles.css"
import App from "./App"

//ReactDOM.render(<App />, document.getElementById("root"))
const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
*/
