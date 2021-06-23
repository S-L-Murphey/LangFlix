import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "./MovieProvider"
import { UserContext } from "../user/UserProvider"
import "./Movie.css"
import { useHistory } from 'react-router-dom'


export const MovieList = () => {

    //const { movies, getMovies, searchTerms, addMovie } = useContext(MovieContext)
    const {movies, getMovieById, getMovieBySearch, searchTerms, addMovie, movieTitles } = useContext(MovieContext)
    const {users, getUsers } = useContext(UserContext)
    const [ filteredMovies, setFiltered ] = useState([])
    const history = useHistory()
    const userID = parseInt(localStorage.getItem("langflix_customer"))

    useEffect(() => {
        getUsers()
    }, [])

    const userLangs = users.filter(user => user.id === userID)
    const currentUserLang = userLangs.map(ul => ul.language)
    const myLang = currentUserLang[0]


    useEffect(() => {
        getMovieBySearch()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
         setFiltered(getMovieBySearch(searchTerms))
          const subset = movies.filter(movie => movie.Title.toLowerCase().includes(searchTerms.toLowerCase()))
          setFiltered(subset)
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


    return (
        

        <section className="movies">
            {
                filteredMovies.map(movie => {
                     //if (movie.Language.includes(myLang))
                        return (
                            <>
                                <div className="movie" id={`movie--${movie.imdbID}`}>
                                    <div className="movie__title">
                                        <h2> {movie.Title}</h2>
                                        <img src={movie.Poster} />
                                        {/*<div> {movie.Plot} </div>
                                        //<div> {parseInt(movie.Runtime.split(" ")[0])} minutes</div>*/}
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