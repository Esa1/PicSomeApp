import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import { Context } from "../Context"

function Image({img, className}) {
    const [isHovered, setIsHovered] = useState(false)
    const {toggleFavorite, addToCart} = useContext(Context)

    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(isHovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
        
    const cartIcon = isHovered && <i className="ri-add-circle-line cart" 
        onClick={() => addToCart(img)}></i>
    
    return (
        <div className={`${className} image-container`} 
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
            <img src={img.url} className="image-grid" alt=""/>
            {heartIcon()}
            {cartIcon}

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