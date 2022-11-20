import React, {useContext} from "react"

import Image from "../components/Image"
import {getClass} from "../utils"
import {Context} from "../Context.js"

function Photos() {
    // Get the allPhotos array from context
    // map over it, creating <Image /> elements of the component we just made
    // <Image key={???} img={<full image object here>} className={getClass(<index of image>)} />
 
    const {photos} = useContext(Context)
    console.log(photos)
    
    const imageElements = photos.map((photo, index) => (
        <Image 
            key={photo.id}
            img={photo}
            className={getClass(index)}
        />
    ))

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos