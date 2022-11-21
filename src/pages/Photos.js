import React, {useContext} from "react"

import Image from "../components/Image"
import {getClass} from "../utils"
import {Context} from "../Context.js"

function Photos() {
    const {photos} = useContext(Context)
    
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