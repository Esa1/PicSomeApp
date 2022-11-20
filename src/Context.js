import React, {createContext, useEffect, useState} from "react";
const Context = createContext()

function PicContextProvider({children}) {
    const [photos, setPhotos] = useState(['Esa', 'Esa1'])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        //Add fetch here
        fetch(url)
            .then(response => response.json())
            .then(data => setPhotos(data))
            .catch((error) => {
                console.log('Error:,error')
            })
    }, [])
    //console.log(photos)

    return (
        <Context.Provider value={{photos}}>
            {children}
        </Context.Provider>
    )
}

export {PicContextProvider, Context}
