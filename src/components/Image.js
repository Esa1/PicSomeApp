import React, { useState, useContext } from "react"

import { Context } from "../Context"

/*
Conditionally render the heart and plus icons when an Image component is being hovered on

1. Icon to render for the heart:
<i className="ri-heart-line favorite"></i>

2. Icon to render for the plus:
<i className="ri-add-circle-line cart"></i>
*/

function Image({img, className}) {
    const [isHovered, setIsHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)

    const heartIcon = isHovered && <i className="ri-heart-line favorite" 
                                    onClick={() => toggleFavorite(img.id)}></i>
    const cartIcon = isHovered && <i className="ri-add-circle-line cart"></i>
    
    //console.log(`isHovered=${isHovered}, ID=${img.id}`)
    return (
        <div className={`${className} image-container`} 
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
            <img src={img.url} className="image-grid" alt=""/>
            {heartIcon}
            {cartIcon}

        </div>
    )
}

export default Image