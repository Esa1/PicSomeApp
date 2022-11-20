import React, {createContext, useEffect, useState} from "react";
const {Provider, Consumer} = createContext()

function PicContextProvider({children}) {
    const [photos, setPhotos] = useState(['Esa', 'Esa1'])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        //Add fetch here
        fetch(url)
            .then(response => response.json())
            .then(data => setPhotos(data))
    }, [])

    return (
        <Provider value={{photos}}>
            {children}
        </Provider>
    )
}

export {PicContextProvider, Consumer as PicContextConsumer}
