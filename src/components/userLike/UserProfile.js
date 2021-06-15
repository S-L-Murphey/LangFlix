import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "../movie/MovieProvider"
import { UserLikesContext } from "./UserLikesProvider"
import "./User.css"
import { useHistory } from 'react-router-dom'


export const UserLikeList = () => {

    const { userLikes, getUserLikes, deleteLike } = useContext(UserLikesContext)
    const { movies, getMovies } = useContext(MovieContext)

    const history = useHistory()

    useEffect(() => {
        getUserLikes()
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
                userLikes.map(userLike => {
                    console.log(parseInt(userLike.movieId.split("tt")[1]))
                    if (parseInt(userLike.movieId.split("tt")[1]) === movies.map(movie => parseInt(movie.imdbID.split("tt")[1])))
                        
                        return (
                            <>
                                <div className="user" id={`user--${userLike.imdbID}`}>
                                    <div className="user__title">
                                        <h2> {userLike.Title}</h2>
                                        <img src={userLike.Poster} />
                                        <div> {userLike.Plot} </div>
                                        <div> {parseInt(userLike.Runtime.split(" ")[0])} minutes</div>
                                    </div>
                                    <button onClick={ handleDelete }>
                                        Delete from Watched List
                                    </button>
                                </div>
                            </>
                        )
                })
            }
        </section>
    
    )
}