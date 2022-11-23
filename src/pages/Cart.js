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
        setIsOrdering(true)
        setTimeout(() => {
            console.log("Order placed") //Not a trace
            setIsOrdering(false)
            emptyCart()}, 3000)            
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost()}</p>
            {//Only render the "Place Order" button if there are items in the cart
                cartItems.length > 0 &&
                <div className="order-button">
                    <button onClick={() => placeOrder()}>
                        {isOrdering ? "Ordering..." : "Place order"}
                    </button>
                </div>
            }
        </main>
    )
}

export default Cart