import React, {createContext, useEffect, useState} from "react";
const Context = createContext()
/*
Setup context to manage items in an array called `cartItems`. This will be an array of image objects.

1. Add the `cartItems` state to context. (Array)
2. Add function to add an image to the cart. (Takes the full image object as parameter)
3. Make it so clicking the plus icon on the image adds the item to the cart. (Console.log the cart items array to see that it's working)
*/
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
    console.log(cartItems)
/*    cartItems.forEach(cartItems => {
        console.log(`id:${cartItems.id}, 
                    isFavorite:${cartItems.isFavorite},
                    url:${cartItems.url},`)
        
    });*/


    return (
        <Context.Provider value={{photos, toggleFavorite, addToCart}}>
            {children}
        </Context.Provider>
    )
}

export {PicContextProvider, Context}
