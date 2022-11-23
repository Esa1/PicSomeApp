import React, { useContext } from "react"
import {Context} from "../Context"
import useHover from "../hooks/useHover"

function CartItem({item}) {
    const {removeFromCart} = useContext(Context)

    //Change the trash icon to a filled-in trash icon when hovering over it
    const [hovered, ref] = useHover()
    console.log("CartItem: " + hovered)

    return (
        <div className="cart-item">
            <i className={hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"} 
                onClick={() => removeFromCart(item.id)}
                ref={ref}
            ></i>
            <img src={item.url} width="130px" alt=""/>
            <p>$5.99</p>
        </div>
    )
}

export default CartItem
