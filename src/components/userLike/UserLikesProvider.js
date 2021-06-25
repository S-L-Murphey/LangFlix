import React, { useState, createContext } from "react"

export const UserLikesContext = createContext()

export const UserLikesProvider = (props) => {
    const [userLikes, setUserLikes] = useState([])

    const getUserLikes = () => {
        return fetch("http://localhost:8088/userLikes?_expand=user")
            .then(res => res.json())
            .then(setUserLikes); 
    }

    /*const addMovie = movieObj => {
        return fetch("http://localhost:8088/movies", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(movieObj)
        })
            .then(getUsers)
    }*/

    const getLikeById = (id) => {
        return fetch(`http://localhost:8088/userLikes/${id}`)
        .then(res=> res.json())
    }

    const deleteLike = userLike => {
    return fetch(`http://localhost:8088/userLikes/${userLike}`, {
        method: "DELETE",
    })
       // .then(getUserLikes)
}

    return (
        <UserLikesContext.Provider value={{
            userLikes, getUserLikes, getLikeById,
            deleteLike
        }}>
            {props.children}
        </UserLikesContext.Provider>
    )

}