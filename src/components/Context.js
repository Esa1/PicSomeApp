import React, {createContext, useState} from "react";
const {Provider, Consumer} = createContext()

export default function PicSomeProvider(props) {
    console.log("PicSomeProvider")
    const [photos, setPhotos] = useState([])

    function addPhoto(photo) {
        console.log("addPhoto")
        setPhotos(prev => (
            [...prev,
             photo
            ]
        ))
    }

    return (
        <Provider value={{photos, addPhoto}}>
            {props.children}
        </Provider>
    )
}

export {PicSomeProvider, Consumer as PicSomeConsumer}