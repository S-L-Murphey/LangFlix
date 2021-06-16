import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/movies">Movie Search</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/userProfile">My Profile</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/about">About</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/login" onClick={() => {
                    localStorage.removeItem("langflix_customer")
                }}>Logout</Link>
            </li>
        </ul>
    )
}