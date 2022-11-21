import React, {createContext, useEffect, useState} from "react";
const Context = createContext()
/*
Add ability to toggle an image's `isFavorited` property by clicking the heart icon (filled heart doesn't need to display on the image yet)

1. Add a toggleFavorite method to context. 
It should take an `id` parameter and update the array of allPhotos by flipping the `isFavorited` 
property of the photo with the matching `id`
    a. Have this function also console.log something so we know it's running correctly
    b. Don't try to modify the individual image object only. Make sure to provide a whole new array to context with the one item with the matching `id` being changed.
2. Make it so clicking the heart icon on any given image runs this method
*/
function PicContextProvider({children}) {
    const [photos, setPhotos] = useState([])

    const toggleFavorite = (id) => {
    console.log(`toggleFavorite id:${id}`)

    const newPhotos = photos.map(photo => {
        if(photo.id === id) {
            console.log(id)
            console.log(!photo.isFavorite)
            return {...photo, isFavorite: !photo.isFavorite}
        }
        return photo
    })
    setPhotos(newPhotos)

    console.log(photos)

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

    return (
        <Context.Provider value={{photos, toggleFavorite}}>
            {children}
        </Context.Provider>
    )
}

export {PicContextProvider, Context}
