import React from "react"
import { useState } from "react"

/*
On the Image component, track the hover state

1. Create state boolean for "hovered"
2. When the mouse enters the Image's div, set "hovered" to true
3. When the mouse leaves the Image's div, set "hovered" to false
4. Log "hovered" to the console so you know it's changing successfully.
*/
function Image({img, className}) {
    //console.log('Image: ' + img)
    const [isHovered, setIsHovered] = useState(false)
    console.log(`isHovered=${isHovered}, ID=${img.id}`)

    return (
        <div className={`${className} image-container`} 
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
        >
            <img src={img.url} className="image-grid" alt=""/>
        </div>
    )
}

export default Image