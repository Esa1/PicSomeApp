import React, { useContext, useState } from "react"
import {Context} from "../Context"

function CartItem({item}) {
    const {removeFromCart} = useContext(Context)
    //Change the trash icon to a filled-in trash icon when hovering over it
    const [isHovering, setIsHovering] = useState(false)

    return (
        <div className="cart-item">
            <i className={isHovering ? "ri-delete-bin-fill" : "ri-delete-bin-line"} 
                onClick={() => removeFromCart(item.id)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            ></i>
            <img src={item.url} width="130px" alt="Beer"/>
            <p>$5.99</p>
        </div>
    )
}

export default CartItem
/*
2. Change the trash icon to a filled-in trash icon when hovering over it

Filled trash icon to use when hovering:
<i className="ri-delete-bin-fill"></i>

Empty trash icon to use when NOT hovering:
<i className="ri-delete-bin-line"></i>
*/