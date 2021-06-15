import React, { useState, createContext } from "react"

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch("http://localhost:8088/users")
            .then(res => res.json())
            .then(setUsers); 
    }

    const addMovie = movieObj => {
        return fetch("http://localhost:8088/movies", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movieObj)
        })
            .then(getUsers)
    }

    const deleteMovie = movieId => {
    return fetch(`http://localhost:8088/movies/${movieId}`, {
        method: "DELETE"
    })
        .then(getMovies)
}

    return (
        <UserContext.Provider value={{
            users, getUsers, addUser, 
            deleteMovie
        }}>
            {props.children}
        </UserContext.Provider>
    )

}