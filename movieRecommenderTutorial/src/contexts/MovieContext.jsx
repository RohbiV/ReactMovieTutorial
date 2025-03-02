import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    // const [favorites, setFavorites] = useState([]);
    
    // Initialize favorites directly from local storage
    const [favorites, setFavorites] = useState(() => {
        const storedFav = localStorage.getItem("favorites");
        return storedFav ? JSON.parse(storedFav) : [];
    });

    // useEffect(
    //     () => {
    //         const storedFav = localStorage.getItem("favorites");
    //         console.log("Favorites Recieved");
            

    //         if (storedFav) {
    //             setFavorites(JSON.parse(storedFav));
    //         }

    //     }, []
    // )

    useEffect(
        () => {
            console.log("Item Updated!");
            localStorage.setItem('favorites', JSON.stringify(favorites))
        }, [favorites]
    )

    // now writing 3 methods of adding to favorites, deleting from favorites and checking whether the movie is favorite or not

    const addToFavorite = (movie) => {
        setFavorites(prev => [...prev, movie]);
    };

    const removeFromFavorite = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorite,
        removeFromFavorite,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}
