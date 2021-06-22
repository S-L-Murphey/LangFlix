import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "../movie/MovieProvider"
import { UserLikesContext } from "../userLike/UserLikesProvider"
import "./User.css"
import { useHistory } from 'react-router-dom'

export const UserProgressBar = () => {

    const userID = parseInt(localStorage.getItem("langflix_customer"))
    const { userLikes, getUserLikes, deleteLike } = useContext(UserLikesContext)
    const { movies, getMovies } = useContext(MovieContext)


    useEffect(() => {
        getUserLikes()
    }, [])

   /* useEffect(() => {
        getMovieById()
    }, [])

    useEffect(() => {
        getMovieBySearch()
    }, [])*/

    const userTargetLanguage = userLikes.map(ul=>{
        if (ul.userId === userID) {
            return ul.user.language
        }
    })

    console.log(userTargetLanguage[0])
    //find just the likes of the currently logged in user
    const findLikes = userLikes.filter(userLike => {
        if (userLike.userId === userID){
            return userLike}
       // return parseInt(userLike.movieId.split("tt")[1])}
    })

    const foundLike = findLikes.map(findLike => {
        return parseInt(findLike.movieId.split("tt")[1])
    })

    const foundRunTime = movies.filter(m =>{
        if (foundLike.includes(parseInt(m.imdbID.split("tt")[1]))){
            return parseInt(m.Runtime.split(" ")[0])
        }
    })
    const totalRunTime = foundRunTime.map(s =>{
        return parseInt(s.Runtime.split(" ")[0])
    })
    const userTotalImmersion = totalRunTime.reduce((a, b)=> a + b, 0)
    //console.log(totalRunTime.reduce((a, b)=> a + b, 0))
  
    
    return (
   
       <section className="users">
            
               <div className="user">You have immersed in {userTargetLanguage[0]} for a total of <strong>{userTotalImmersion} Minutes</strong></div>
                

        </section> 
    )
}