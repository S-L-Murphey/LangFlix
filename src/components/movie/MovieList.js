import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "./MovieProvider"
import "./Movie.css"
import { useHistory } from 'react-router-dom'


export const MovieList = () => {

    const { movies, getMovies, searchTerms } = useContext(MovieContext)

    const [ filteredMovies, setFiltered ] = useState([])
    const history = useHistory()

    useEffect(() => {
        getMovies()
    }, [])
    
    useEffect(() => {
        if (searchTerms !== "") {
          const subset = movies.filter(movie => movie.Title.toLowerCase().includes(searchTerms))
          setFiltered(subset)
        } else {
          setFiltered(movies)
        }
      }, [searchTerms, movies])

    return (
        

        <section className="movies">
            {
                movies.map(movie => {
                    if (movie.Title == "Avengers: Endgame") {
                        return (
                            <>
                                <div className="movie" id={`movie--${movie.imdbID}`}>
                                    <div className="movie__title">
                                        <h2> {movie.Title}</h2>
                                        <img src={movie.Poster} />
                                        <div> {movie.Plot} </div>
                                        <div> {parseInt(movie.Runtime.split(" ")[0])} minutes</div>
                                    </div>
                                    <button onClick={
                                        () => history.push("/movies/create") //this needs to be pushed to user profile.
                                    }>
                                        Add To Watched
                                    </button>
                                </div>
                            </>
                        )
                    }
                })
            }
        </section>
    )
}