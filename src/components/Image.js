import React, { useState, useContext } from "react"
import PropTypes from "prop-types"
import { Context } from "../Context"

function Image({img, className}) {
    const [isHovered, setIsHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)

    let heartIcon = ''
    if (img.isFavorite)
        heartIcon = <i className="ri-heart-fill favorite" 
                        onClick={() => toggleFavorite(img.id)}></i>
    else if (isHovered)
        heartIcon = <i className="ri-heart-line favorite" 
                        onClick={() => toggleFavorite(img.id)}></i>

/*    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }*/
        
                        const cartIcon = isHovered && <i className="ri-add-circle-line cart"></i>
    
    return (
        <div className={`${className} image-container`} 
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
            <img src={img.url} className="image-grid" alt=""/>
            {heartIcon /*heartIcon()*/}
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
/*
Add propTypes to the Image component

1. className should be a string
2. img should be an object, specifically an object with `id`, `url`, and `isFavorite` properties
    a. Hint: Specifying the properties of an object is called and object's "shape"

https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
*/

export default Image