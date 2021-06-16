import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "../movie/MovieProvider"
import { UserLikesContext } from "./UserLikesProvider"
import "./User.css"
import { useHistory } from 'react-router-dom'


export const UserLikeList = () => {

    const userID = parseInt(localStorage.getItem("langflix_customer"))
    const { userLikes, getUserLikes, deleteLike } = useContext(UserLikesContext)
    const { movies, getMovies } = useContext(MovieContext)

    const history = useHistory()

    useEffect(() => {
        getUserLikes()
    }, [])

    useEffect(() => {
        getMovies()
    }, [])


    const handleDelete = () => {
        deleteLike(userLikes.id)
          .then(() => {
            history.push("/userProfile")
          })
      }
    
    return (

       <section className="users">
            {
               movies.map(movie => {
                    console.log(parseInt(movie.imdbID.split("tt")[1]))
                    if (parseInt(movie.imdbID.split("tt")[1]) === userLikes.map(userLike => {
                        if (userLike.id === userID) {
                            parseInt(userLike.movieId.split("tt")[1])}}))
                        
                        return (
                            
                                <div className="user" id={`user--${movie.imdbID}`}>
                                    <div className="user__title">
                                        <h2> Hello World </h2>
                                        {/*<img src={userLike.Poster} />
                                        <div> {userLike.Plot} </div>
                        <div> {parseInt(userLike.Runtime.split(" ")[0])} minutes</div>*/}
                                    </div>
                                    <button onClick={ handleDelete }>
                                        Delete from Watched List
                                    </button>
                                </div>
                            
                        )
                })
            }
        </section> 

        /*<section className="users">
            {
                userLikes.map(userLike => {
                  console.log(parseInt(userLike.movieId.split("tt")[1]))
                    if (parseInt(userLike.movieId.split("tt")[1]) === movies.map(movie => {parseInt(movie.imdbID.split("tt")[1])}))
                        
                        return (
                            <>
                                <div className="user" id={`user--${userLike.movieId}`}>
                                    <div className="user__title">
                                        <h2> {movies.map(movie => {movie.Title})}</h2>
                                        {/*<img src={movie.Poster} />
                                        <div> {movie.Plot} </div>
                                        <div> {parseInt(movie.Runtime.split(" ")[0])} minutes</div>}
                                    </div>
                                    <button onClick={ handleDelete }>
                                        Delete from Watched List
                                    </button>
                                </div>
                            </>
                        )
                })
            }
        </section>*/
    
    )
}