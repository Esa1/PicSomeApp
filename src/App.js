import React from "react"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import {Routes, Route} from "react-router-dom"

function App() {
    <Routes>
        <Route exact path="/" element={<Photos/>} />
        <Route path="/cart" element={<Cart/>} />
    </Routes>

    return (
        <div>
            <Header />
            <h1>Home Page</h1>
            
            <Routes>
                <Route exact path="/" element={<Photos/>} />
                <Route path="/cart" element={<Cart/>} />
            </Routes>
        </div>
)
}

export default App