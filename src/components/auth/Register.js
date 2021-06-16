import React, { useRef, useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import "./Login.css"
import { MovieContext } from "../movie/MovieProvider"

export const Register = (props) => {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const verifyPassword = useRef()
    const conflictDialog = useRef()
    const history = useHistory()

    const { movies, getMovies } = useContext(MovieContext)

    useEffect(() => {
        getMovies()
    }, [])

    const languages = "Mandarin Chinese, Spanish, English, Hindi/Urdu, Arabic, Bengali, Portuguese, Russian, Japanese, German, Javanese, Punjabi, Wu, French, Telugu, Vietnamese, Marathi, Korean, Tamil, Italian, Turkish,Cantonese/Yue"
    
    const languageList = languages.split(", ")
    console.log(languageList)
  
   const setId = (item, index) => {
       const fullName = "name: "+ item;
       return fullName
   }

   const languageLoop = languageList.map(setId)
  // console.log(languageLoop)
    

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()


        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            name: `${firstName.current.value} ${lastName.current.value}`
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("langflix_customer", createdUser.id)
                                history.push("/")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })
        
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for LangFlix</h1>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                </fieldset>
{/* Drop down for language selection feature */}
                <fieldset>
                <div className="form-group">
                    <label htmlFor="language">What Language are you Learning?: </label>
                    <select name="languageId" id="languageId" className="form-control" >
                        <option value="0">Select a language</option>
                        
                                {languageList.map((element => <option>{element}</option>)
                                )}
                                   
                        ))
                    </select>
                </div>
                </fieldset>

                <fieldset>
                    <button type="submit"> Sign in </button>
                </fieldset>
            </form>
        </main>
    )
}

