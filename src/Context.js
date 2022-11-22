import React, {createContext, useEffect, useState} from "react";
const Context = createContext()

function PicContextProvider({children}) {
    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

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

    function toggleFavorite(id) {

        const newPhotos = photos.map(photo => {
            if(photo.id === id) {
                console.log(id)
                console.log(!photo.isFavorite)
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setPhotos(newPhotos)
    }

    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    return (
        <Context.Provider value={{photos, toggleFavorite, addToCart, cartItems}}>
            {children}
        </Context.Provider>
    )
}

export {PicContextProvider, Context}
