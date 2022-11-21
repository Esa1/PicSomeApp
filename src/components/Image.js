import React, { useState, useContext } from "react"

import { Context } from "../Context"
/*
Make the image display the filled heart icon when it's already favorited

Logic to follow:
* If the image is favorited, display the filled heart icon always
* Otherwise, if the image being hovered on, display the heart outline instead
* If it isn't favorited OR hovered on, don't display anything

Remember to make it so clicking the filled heart icon ALSO runs the toggleFavorite function!

Filled heart icon:
<i className="ri-heart-fill favorite"></i>
*/
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
    
    //console.log(`isHovered=${isHovered}, ID=${img.id}`)
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

export default Image