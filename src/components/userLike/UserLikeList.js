import React, { useContext, useEffect } from "react"
import { MovieContext } from "../movie/MovieProvider"
import { UserLikesContext } from "./UserLikesProvider"
import "./User.css"
import { useHistory } from 'react-router-dom'
import { UserLikeDetail } from "./UserLikeDetail"



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

    

    //find just the likes of the currently logged in user
    const findLikes = userLikes.filter(userLike => {
        if (userLike.userId === userID) {
            return userLike
        }

    })

    //go throught the likes of the currently logged in user and pull out the foreign key
    //of the movie info and convert to int. Will return [some_number]
    const foundLike = findLikes.map(findLike => {
        return parseInt(findLike.movieId.split("tt")[1])
    })
    //console.log(foundLike)
    const foundRunTime = movies.map(m => {
        if (foundLike.includes(parseInt(m.imdbID.split("tt")[1]))) {
            return parseInt(m.Runtime.split(" ")[0])
        }
    })
    console.log(foundRunTime[0])


    const handleDelete = () => {
        deleteLike(userLikes.id)
            .then(() => {
                history.push("/userProfile")
            })
    }

    return (

        <section className="users">

            {
                movies.map(movie =>  {
                    //const findMatch = findLikes.filter(ul =>ul.movieId === movie.imdbID)
                    //console.log(parseInt(movie.imdbID.split("tt")[1]))
                    if (foundLike.includes(parseInt(movie.imdbID.split("tt")[1])))

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

/*() => if (movie.imdbID === userLikes.find((ul) => {
    if (ul.movieId === movie.imdbID).movieId){
        deleteLike(ul)}
    }*/