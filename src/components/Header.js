import React, { useContext } from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"

function Header() {
    const {cartItems} = useContext(Context)
    const cartIconClass = cartItems.length > 0 ? "ri-shopping-cart-fill" :
                                            "ri-shopping-cart-line"
    return (
        <header>
            <h2><Link to="/">Pic Some</Link></h2>
            <Link to="/cart"><i className={`${cartIconClass} ri-fw ri-2x`}></i></Link>
        </header>
    )
}
/*
Full class name to use WHEN ITEMS IN CART:
"ri-shopping-cart-fill ri-fw ri-2x"

Full class name to use WHEN CART IS EMPTY:
"ri-shopping-cart-line ri-fw ri-2x"
*/
export default Header
