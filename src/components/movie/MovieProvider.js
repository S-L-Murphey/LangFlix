import React, { useState, createContext } from "react"

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([])
    const [ searchTerms, setSearchTerms ] = useState("")


    const getMovies = () => {
        return fetch("http://localhost:8088/movies")
            .then(res => res.json())
            .then(setMovies); 
    }

    const addMovie = movieObj => {
        return fetch("http://localhost:8088/userLikes", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movieObj)
        })
            .then(getMovies)
    }

    const deleteMovie = movieId => {
    return fetch(`http://localhost:8088/movies/${movieId}`, {
        method: "DELETE"
    })
        .then(getMovies)
}

    return (
        <MovieContext.Provider value={{
            movies, getMovies, addMovie, 
            deleteMovie, searchTerms, setSearchTerms
        }}>
            {props.children}
        </MovieContext.Provider>
    )

}