import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "./MovieProvider"
import "./Movie.css"
import { useHistory } from 'react-router-dom'


export const MovieList = () => {

    const { movies, getMovies, searchTerms, addMovie } = useContext(MovieContext)

    const [ filteredMovies, setFiltered ] = useState([])
    const history = useHistory()
    const userID = parseInt(localStorage.getItem("langflix_customer"))

    useEffect(() => {
        getMovies()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
          const subset = movies.filter(movie => movie.Title.toLowerCase().includes(searchTerms.toLowerCase()))
          setFiltered(subset)
        } else {
          setFiltered(movies)
        }
      }, [searchTerms, movies])

      

const handleClickSaveMovie = (event) => {
      const [, postId] = event.target.id.split("--")
        
      const newUserLike = {
        movieId: postId,
        userId: userID };
      return addMovie(newUserLike)
        .then(() => history.push("/userProfile"))
    }


      console.log(filteredMovies)

    return (
        

        <section className="movies">
            {
                filteredMovies.map(movie => {
                     
                        return (
                            <>
                                <div className="movie" id={`movie--${movie.imdbID}`}>
                                    <div className="movie__title">
                                        <h2> {movie.Title}</h2>
                                        <img src={movie.Poster} />
                                        <div> {movie.Plot} </div>
                                        <div> {parseInt(movie.Runtime.split(" ")[0])} minutes</div>
                                    </div>
                                    <button className="btn btn-primary"  id={`movie--${movie.imdbID}`} onClick={handleClickSaveMovie}>
                                        Add To Watched
                                    </button>
                                </div>
                            </>
                        )
                    
                })
            }
        </section>
    )
}