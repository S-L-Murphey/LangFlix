import React, { useRef } from "react"
import { useHistory } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const language = useRef()
    const verifyPassword = useRef()
    const conflictDialog = useRef()
    const history = useHistory()


    const languages = [
        {id: 1, language:"Mandarin Chinese"},
        {id: 2, language:"Spanish"}, {id: 3, language:"English"}, {id: 4, language:"Hindi/Urdu"}, {id: 5, language:"Arabic"}, {id: 6, language:"Bengali"}, {id: 7, language: "Portuguese"}, {id: 8, language: "Russian"}, {id: 9, language: "Japanese"}, {id: 10, language: "German"}, {id: 11, language: "Japanese"}, {id: 12, language: "Punjabi"}, {id: 13, language: "Wu"}, {id: 14, language: "French"}, {id: 15, language:"Telugu"}, {id: 16, language:"Vietnamese"}, {id: 17, language:"Marathi"}, {id: 18, language:"Korean"}, {id: 19, language:"Tamil"}, {id: 20, language:"Italian"}, {id: 21, language:"Turkish"},{id: 22, language:"Cantonese/Yue"}
    ]
    
    //const languageList = languages.split(", ")

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
                            name: `${firstName.current.value} ${lastName.current.value}`,
                            language: language.current.value
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

                <fieldset>
                <div className="form-group">
                    <label htmlFor="language">What Language are you Learning?: </label>
                    <select ref={language} name="languageId" id="languageId" className="form-control"  >
                        <option value="0">Select a language</option>

                                {languages.map((element => {
                                return <option value={element.language}>{element.language}</option>})
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

