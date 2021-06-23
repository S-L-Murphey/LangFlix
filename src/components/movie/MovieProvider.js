import React, { useState, createContext } from "react"

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([])
    const [movieTitles, setMovieTitles] = useState([])
    const [searchTerms, setSearchTerms] = useState("")


    /*const getMovies = () => {
        return fetch("http://localhost:8088/movies")
            .then(res => res.json())
            .then(setMovies);
    }*/

    const getMovieBySearch = (searchWord) => {
        fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?s=${searchWord}&page=1&r=json`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "371b53e263msh23e127f5f88ef58p100627jsnf5082aed932c",
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
            }
        })
        .then(res => res.json())
        .then((response) => setMovies(response.Search))
    }

    const getMovieById = (movieID) => {
        return fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?i=${movieID}&r=json`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "371b53e263msh23e127f5f88ef58p100627jsnf5082aed932c",
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
            }
        })
        .then(res => res.json())
       //.then(setMovieTitles);
    }

    const addMovie = movieObj => {
        return fetch("http://localhost:8088/userLikes", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movieObj)
        })
           // .then(getMovies)
    }

   /* const deleteMovie = movieId => {
        return fetch(`http://localhost:8088/movies/${movieId}`, {
            method: "DELETE"
        })
            //.then(getMovies)
    }*/

    return (
        <MovieContext.Provider value={{
            movies, addMovie, getMovieById, getMovieBySearch, movieTitles,
             searchTerms, setSearchTerms
        }}>
            {props.children}
        </MovieContext.Provider>
    )

}