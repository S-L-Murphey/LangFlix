import React, { useContext, useEffect, useState } from "react"
import { MovieContext } from "../movie/MovieProvider"
import { UserLikesContext } from "../userLike/UserLikesProvider"
import "./User.css"
import { Link } from 'react-router-dom'

export const UserProgressBar = () => {

    const userID = parseInt(localStorage.getItem("langflix_customer"))
    const { userLikes, getUserLikes } = useContext(UserLikesContext)
    const { getMovieById } = useContext(MovieContext)
    const [userLike, setUserLike] = useState([])


    useEffect(() => {
        getUserLikes()
    }, [])

    //find just the likes that are of the current user. Returns undefined if ul.userId !== UserID
    const userLikeLog = userLikes.map(ul => {
        if (ul.userId === userID) {
            return ul
        }
    })

    console.log(userLikeLog)

    //Pull out an array without the undefined elements.
    const removeUndefinedLikes = userLikeLog.filter(element => element !== undefined)
    console.log(removeUndefinedLikes)

    
    //creates an Array that includes the currently logged in user's target language
    let emptyArray = []
    const userLanguage = userLikeLog.find(lang => {
        if (lang !== undefined) {
            return emptyArray.push(lang.user.language)
        }
    })

    console.log(emptyArray)

    useEffect(() => {

        const promises = removeUndefinedLikes.map(ull => (
            getMovieById(ull.filmIdentifier))
        );
        Promise.all(promises).then(data => {
            setUserLike(data)
        })
    }, [userLikes])

    console.log(userLike)

    let newEmptyArray = []
    const justIds = removeUndefinedLikes.map(ji => {
        if (ji.userId === userID) {
            return newEmptyArray.push(ji.filmIdentifier)
        }
    })
    console.log(justIds)
    console.log(newEmptyArray)


    const foundRunTime = userLike.filter(m => {
        if (newEmptyArray.includes(m.imdbID)) {
            return m.Runtime
        }
    })
    console.log(foundRunTime)

    const totalRunTime = foundRunTime.map(s => {
        return parseInt(s.Runtime.split(" ")[0])
    })

    console.log(totalRunTime)
    const userTotalImmersion = totalRunTime.reduce((a, b) => a + b, 0)
  
    const percentage = (userTotalImmersion / 60000) * 100

    return (

        <section className="users">

            <div className="user">You have immersed in <strong>{emptyArray[0]}</strong> for a total of <strong>{userTotalImmersion} Minutes.</strong> <p>You are {percentage.toFixed(2)}% of the way to fluency!</p>

            <Link to= {`/userProfile/edit/${userID}`}><button>
                                        Edit Your Language?
                                    </button></Link>
                                    </div>
        </section>
    )
}