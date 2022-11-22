import React, {useContext, useState} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const [isOrdering, setIsOrdering] = useState(false)
    const {cartItems, emptyCart} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    function totalCost() {
        //Assume all items cost $5.99
        
        const total = cartItems.length * 5.99
        const localTotal = total.toLocaleString("en-US", 
                            {style: "currency", currency: "USD"})
        return localTotal
    }

    function placeOrder() {
//        console.log("placeOrder: " + buttonText)
        setIsOrdering(true)
        setTimeout(() => {
            console.log("Order placed") 
            setIsOrdering(false)
            emptyCart()}, 3000)            
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost()}</p>
            <div className="order-button">
                <button onClick={() => placeOrder()}>
                    {isOrdering ? "Ordering..." : "Place order"}
                </button>
            </div>
        </main>
    )
}

export default Cart