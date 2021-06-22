/*import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "../movie/MovieProvider"
import { UserLikesContext } from "./UserLikesProvider"
import "./User.css"
import { useHistory } from 'react-router-dom'

export const UserLikeDetail = (props) => {

    const { getUserLikes, deleteLike } = useContext(UserLikesContext)
    const { movies, getMovies } = useContext(MovieContext)

    const [userLike, setUserLikes] = useState({
        movieId: "",
        userId: 0
    })

    const userLikeId = userLike.id

    const history = useHistory()

    useEffect(() => {
        getUserLikes(userLikeId)
            .then(
                movieObj => (setUserLikes(movieObj))
            )
    }, []
    )

    const handleDelete = () => {
        deleteLike(userLike.id)
        .then(() => {
            history.push("/userProfile")
        })
    }

    return (
        movies.map = (movie => {

        
        
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
        })
    )
}*/