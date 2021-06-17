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

    const findLikes = userLikes.filter(userLike => {
        if (userLike.userId === userID){
            return userLike}
       // return parseInt(userLike.movieId.split("tt")[1])}
    })

    const foundLike = findLikes.map(findLike => {
        return parseInt(findLike.movieId.split("tt")[1])
    })
    console.log(foundLike)


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
                    //console.log(parseInt(movie.imdbID.split("tt")[1]))
                    if (foundLike.includes(parseInt(movie.imdbID.split("tt")[1]))) 
                        
                        return (
                            
                                <div className="user" id={`user--${movie.imdbID}`}>
                                    <div className="user__title">
                                    <h2> {movie.Title}</h2>
                                        <img src={movie.Poster} />
                                        <div> {movie.Plot} </div>
                                        <div> {parseInt(movie.Runtime.split(" ")[0])} minutes</div>
                                    <button onClick={ handleDelete }>
                                        Delete from Watched List
                                    </button>
                                </div>
                            </div>
                        )
                })
            }
        </section> 
    )
}