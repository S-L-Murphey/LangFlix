import React, { useState, createContext } from "react"

export const UserLikesContext = createContext()

export const UserLikesProvider = (props) => {
    const [userLikes, setUserLikes] = useState([])

    const getUserLikes = () => {
        return fetch("http://localhost:8088/userLikes?_expand=user")
            .then(res => res.json())
            .then(setUserLikes); 
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

    const deleteLike = movieId => {
    return fetch(`http://localhost:8088/userLikes/${movieId}`, {
        method: "DELETE"
    })
        .then(getUserLikes)
}

    return (
        <UserContext.Provider value={{
            userLikes, getUserLikes, addUser, 
            deleteMovie
        }}>
            {props.children}
        </UserContext.Provider>
    )

}