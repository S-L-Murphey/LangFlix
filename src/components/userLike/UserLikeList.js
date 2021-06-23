/* eslint-disable no-unused-expressions */
import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "../movie/MovieProvider"
import { UserLikesContext } from "./UserLikesProvider"
import "./User.css"
import { useHistory } from 'react-router-dom'
import { UserLikeDetail } from "./UserLikeDetail"

export const UserLikeList = () => {

    const userID = parseInt(localStorage.getItem("langflix_customer"))
    const { userLikes, getUserLikes, deleteLike } = useContext(UserLikesContext)
    const { movieTitles, getMovieById } = useContext(MovieContext)
    const [userLike, setUserLike] = useState([])

    const history = useHistory()

    const userLikeLog = userLikes.map(ul => {
            if (ul.userId === userID){
                return ul
            }})

    console.log(userLikeLog)

    useEffect(() => {
        getUserLikes()
    }, [])

    useEffect(() => {
        const promises = userLikeLog.map(ull => (
            getMovieById(ull.movieId))
        );
        Promise.all(promises).then(data => {
            setUserLike(data)
        })
     }, [])

    //const newMovieTitles = []
    // newMovieTitles.push(movieTitles)
    console.log(userLike)


    //find just the likes of the currently logged in user
    const findLikes = userLikes.filter(userLike => {
        if (userLike.userId === userID) {
            return userLike
        }

    })
    console.log(findLikes)

    //go throught the likes of the currently logged in user and pull out the foreign key
    //of the movie info
    const foundLike = findLikes.map(findLike => {
        return (findLike.movieId)
    })
    console.log(foundLike)
    /*
        const foundRunTime = newMovieTitles.map(m => {
            if (foundLike.includes(m.imdbID)) {
                return parseInt(m.Runtime.split(" ")[0])
            }
        })
        console.log(foundRunTime[0])
    */
    const handleDelete = () => {
        deleteLike(userLikes.id)
            .then(() => {
                history.push("/userProfile")
            })
    }

    return (

        <section className="users">

            {
                userLike.map(movie => {
                    //const findMatch = findLikes.filter(ul =>ul.movieId === movie.imdbID)
                    //console.log(parseInt(movie.imdbID.split("tt")[1]))
                    if (foundLike.includes((movie.imdbID)))

                        return (



                            <div className="user" id={`user--${movie.imdbID}`}>
                                <div className="user__title">
                                    <h2> {movie.Title}</h2>
                                    <img src={movie.Poster} />
                                    <div> {movie.Plot} </div>
                                    <div> {parseInt(movie.Runtime.split(" ")[0])} minutes</div>
                                    <button onClick={handleDelete}>
                                        Delete from Watched List
                                    </button>
                                </div>
                            </div>
                        )
                })
            }
        </section >
    )
}

