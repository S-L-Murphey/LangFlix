import React, { useContext, useEffect, useState, useRef } from "react";
import { UserContext } from "./UserProvider";
import "./User.css"
import { useParams, useHistory } from "react-router-dom"

export const UserDetail = () => {
    const userID = parseInt(localStorage.getItem("langflix_customer"))
    const { users, getUsers, updateUser } = useContext(UserContext)
    const [userLanguage, setUserLanguage] = useState([])
    const history = useHistory();
    const  currentUser  = useParams();
    const language = useRef()
    //const [isLoading, setIsLoading] = useState(true);

   /* useEffect(() => {
        getUsers()
    }, [])*/

    console.log(users)

    useEffect(() => {

        getUsers()

        const thisUser = users.find(element => element.id === userID)

        setUserLanguage(thisUser)

    }, [])


    const languages = [
        { id: 1, language: "Mandarin Chinese" },
        { id: 2, language: "Spanish" }, { id: 3, language: "English" }, { id: 4, language: "Hindi/Urdu" }, { id: 5, language: "Arabic" }, { id: 6, language: "Bengali" }, { id: 7, language: "Portuguese" }, { id: 8, language: "Russian" }, { id: 9, language: "Japanese" }, { id: 10, language: "German" }, { id: 11, language: "Japanese" }, { id: 12, language: "Punjabi" }, { id: 13, language: "Wu" }, { id: 14, language: "French" }, { id: 15, language: "Telugu" }, { id: 16, language: "Vietnamese" }, { id: 17, language: "Marathi" }, { id: 18, language: "Korean" }, { id: 19, language: "Tamil" }, { id: 20, language: "Italian" }, { id: 21, language: "Turkish" }, { id: 22, language: "Cantonese/Yue" }
    ]

    const handleControlledInputChange = (event) => {
        const newUserLang = {...userLanguage}
        newUserLang[event.target.name] = event.target.value
        setUserLanguage(newUserLang)
    }

   

    console.log(userLanguage)

    const handleSaveLanguage = () => {
        if (currentUser){
           
            updateUser({
                id: userLanguage.id,
                name: userLanguage.name,
                email: userLanguage.email,
                language: userLanguage.language
            }).then(() => history.push(`/movies`))
        }
    }




    return (

        <section className="users">

            <fieldset>
                <div className="form-group">
                    <label htmlFor="language">Update your Target Language: </label>
                    <select ref={language} name="language" id="languageId" className="form-control" onChange={handleControlledInputChange} >
                        <option value="0">Select a language</option>

                        {languages.map((element => {
                            return <option value={element.language}>{element.language}</option>
                        })
                        )}

                        ))
                    </select>
                </div>
            </fieldset>
           <button onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveLanguage()
          }}>Update Your Language</button>
        </section>
    )



}