/* eslint-disable no-unused-expressions */
import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "../movie/MovieProvider"
import { UserLikesContext } from "./UserLikesProvider"
import "./User.css"
import { useHistory, Link } from 'react-router-dom'



export const UserLikeList = () => {

    const userID = parseInt(localStorage.getItem("langflix_customer"))
    const { userLikes, getUserLikes } = useContext(UserLikesContext)
    const { getMovieById } = useContext(MovieContext)
    const [userLike, setUserLike] = useState([])
    

    const userLikeLog = userLikes.map(ul => {
        if (ul.userId === userID) {
            return ul
        }
    })

    const removeUndefinedLikes = userLikeLog.filter(element => element !== undefined)
    console.log(removeUndefinedLikes)


    console.log(userID)
    console.log(userLikeLog)

    useEffect(() => {
        getUserLikes()
    }, [])

    useEffect(() => {

        const promises = removeUndefinedLikes.map(ull => (
            getMovieById(ull.filmIdentifier))
        );
        Promise.all(promises).then(data => {
            setUserLike(data)
        })
    }, [userLikes])

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
        return (findLike.filmIdentifier)
    })
    console.log(foundLike)

    return (

        <section className="users">

            {
                userLike.map(movie => {
                    
                    if (foundLike.includes((movie.imdbID))) {

                        return (

                            <div className="user" >
                                <div className="user__title">
                                    <h2> {movie.Title}</h2>
                                    <img src={movie.Poster} />
                                    <div> {movie.Plot} </div>
                                    <div> {parseInt(movie.Runtime.split(" ")[0])} minutes</div>
                                   <Link to= {`/userProfile/detail/${movie.imdbID.split("tt")[1]}`}><button>
                                        Delete from Your List?
                                    </button></Link>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </section >
    )
}


