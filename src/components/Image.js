import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import { Context } from "../Context"
/*
# Challenge

Change the plus icon to a full shopping cart icon when an image is already in the cart. This should display whether the image is being hovered or not (like the favorite icon).

Icon to use when item already in cart:
<i className="ri-shopping-cart-fill cart"></i>

Hints: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
https://stackoverflow.com/a/8217584
*/
function Image({img, className}) {
    const [isHovered, setIsHovered] = useState(false)
    const {toggleFavorite, addToCart, cartItems} = useContext(Context)

    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(isHovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
    
    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart)
            return <i className="ri-shopping-cart-fill cart" onClick={() => addToCart(img)}></i>
        else if (isHovered)
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
    }

    return (
        <div className={`${className} image-container`} 
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
            <img src={img.url} className="image-grid" alt=""/>
            {heartIcon()}
            {cartIcon()}

        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string, /*May not always be string?*/
    img: PropTypes.shape ({
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool,
        url: PropTypes.string.isRequired
    })
}

export default Image