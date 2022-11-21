import React from "react"
import { useState } from "react"

/*
Conditionally render the heart and plus icons when an Image component is being hovered on

1. Icon to render for the heart:
<i className="ri-heart-line favorite"></i>

2. Icon to render for the plus:
<i className="ri-add-circle-line cart"></i>
*/

function Image({img, className}) {
    //console.log('Image: ' + img)
    const [isHovered, setIsHovered] = useState(false)
    console.log(`isHovered=${isHovered}, ID=${img.id}`)

    const heartIcon = hovered && <i className="ri-heart-line favorite"></i>
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>
    
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