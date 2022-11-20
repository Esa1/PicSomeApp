import React, {useContext} from "react"

import Image from "../components/Image"
import {getClass} from "../utils"
import {PicContextConsumer} from "../components/Context.js"

function Photos1() {
    // Get the allPhotos array from context
    // map over it, creating <Image /> elements of the component we just made
    // <Image key={???} img={<full image object here>} className={getClass(<index of image>)} />
 
    return (
        <main className="photos">
            <PicContextConsumer>
                {({photos}) => {
                    photos.map(photo => (
                        <>
                        {/*<Image 
                            key={photo.id}
                            img={photo.url}
                            className={getClass(photo.id)}
                    />*/}
                        <div>Esa</div>
                        </>
                    ))
                }}
            </PicContextConsumer>
            <h1>Images go here</h1>
        </main>
    )
}

function Photos() {
    // Get the allPhotos array from context
    // map over it, creating <Image /> elements of the component we just made
    // <Image key={???} img={<full image object here>} className={getClass(<index of image>)} />
 
    return (
        <main className="photos">
            <PicContextConsumer>
                {({photos}) => {
                    console.log(photos.map(photo => (
                        <Image 
                            key={photo.id}
                            img={photo.url}
                            className={getClass(photo.id)}
                        />
                    )))
                }}
            </PicContextConsumer>
            <h1>Images go here</h1>
        </main>
    )
}

export default Photos