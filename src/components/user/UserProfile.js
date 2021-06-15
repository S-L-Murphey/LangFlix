import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "../movie/MovieProvider"
import { UserContext } from "./UserProvider"
import "./User.css"
import { useHistory } from 'react-router-dom'


export const UserList = () => {

    const { users, getUsers, deleteMovie } = useContext(UserContext)
    const { movies, getMovies } = useContext(MovieContext)

    const history = useHistory()

    useEffect(() => {
        getUsers()
    }, [])
    

    return (

        <section className="users">
            {
                movies.map(user => {
                    if (user.Title == "Avengers: Endgame") {
                        return (
                            <>
                                <div className="user" id={`user--${user.imdbID}`}>
                                    <div className="user__title">
                                        <h2> {user.Title}</h2>
                                        <img src={user.Poster} />
                                        <div> {user.Plot} </div>
                                        <div> {parseInt(user.Runtime.split(" ")[0])} minutes</div>
                                    </div>
                                    <button onClick={
                                        () => history.push("/users/create") //this needs to be pushed to user profile.
                                    }>
                                        Delete from Watched List
                                    </button>
                                </div>
                            </>
                        )
                    }
                })
            }
        </section>
    )
}