import React from "react"

function Image({img, className}) {
    console.log('Image: ' + img + 'className: ' + className)
    return (
        <div className={`${className} image-container`}>
            <img src={img} className="image-grid"/>
       </div>
    )
}

export default Image