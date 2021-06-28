import React, { useContext, useEffect, useState } from "react"
import { UserLikesContext } from "./UserLikesProvider"
import "./User.css"
import { useParams, useHistory } from "react-router-dom"

export const UserLikeDetail = () => {

    const { userLikes, getUserLikes, deleteLike } = useContext(UserLikesContext);
    const history = useHistory();
    const likeId = useParams();
    const [like, setLike] = useState({})

    //get the userLikes Array
    useEffect(() => {
        getUserLikes()
    }, [])

    //Pull whatever useParams has and convert it to an integer
    const convertURL = (likeId.filmIdentifier)

    const matchLike = userLikes.map(ul => (ul.filmIdentifier.split("tt")[1]))

    useEffect(() => {

        const thisLike = matchLike.find(element => element == convertURL)

        setLike(thisLike)

    }, [likeId])


    const matchLikeToUserLike = userLikes.find(ull => {
        if (ull.filmIdentifier.includes(like)) {
            return ull
        }
    })

    return (

        <section className="users">
            <div className="user">Are You Sure You Want to Delete this Title?
        <button onClick={() => {
                    deleteLike(matchLikeToUserLike.id).then(() => {
                        history.push("/userProfile")
                    }).then(getUserLikes)
                }}>
                    Delete from WatchList
            </button>
            </div>
        </section >
    )
}