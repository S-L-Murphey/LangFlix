import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "../movie/MovieProvider"
import { UserLikesContext } from "../userLike/UserLikesProvider"
import "./User.css"
import { useHistory } from 'react-router-dom'

export const UserProgressBar = () => {

    const userID = parseInt(localStorage.getItem("langflix_customer"))
    const { userLikes, getUserLikes, deleteLike } = useContext(UserLikesContext)
    const { movies, getMovies } = useContext(MovieContext)
    const { movieTitles, getMovieById } = useContext(MovieContext)
    const [userLike, setUserLike] = useState([])


    useEffect(() => {
        getUserLikes()
    }, [])

    //find just the likes that are of the current user
    const userLikeLog = userLikes.map(ul => {
        if (ul.userId === userID){
            return ul
        }})

        console.log(userLikeLog)

    useEffect(() => {
      
        const promises = userLikeLog.map(ull => (
            getMovieById(ull.filmIdentifier))
        );
        Promise.all(promises).then(data => {
            setUserLike(data)
        })
     }, [userLikes])

    //find the target language of the current user
    const userTargetLanguage = userLikes.map(lang=>{
        if (lang.userId === userID) {
            return lang.user.language
        }
    })

    console.log(userTargetLanguage[0])
    console.log(userLike)

    const justIds = userLikeLog.map(ji => {
        return ji.filmIdentifier
    })
    console.log(justIds)
    

    const foundRunTime = userLike.filter(m =>{
        if (justIds.includes(m.imdbID)){
            return m.Runtime
        }
    })
    console.log(foundRunTime)
    
    const totalRunTime = foundRunTime.map(s =>{
        return parseInt(s.Runtime.split(" ")[0])
    })

    console.log(totalRunTime)
    const userTotalImmersion = totalRunTime.reduce((a, b)=> a + b, 0)
    //console.log(totalRunTime.reduce((a, b)=> a + b, 0))
    const percentage =(userTotalImmersion/60000) * 100
    
    return (
   
       <section className="users">
            
               <div className="user">You have immersed in {userTargetLanguage[0]} for a total of <strong>{userTotalImmersion} Minutes.</strong> <p>You are {percentage.toFixed(2)}% of the way to fluency!</p></div>

              
                

        </section> 
    )
}