import React, { useContext } from "react"
import { MovieContext } from "./MovieProvider"
import "./Movie.css"

export const MovieSearch = () => {
  const { setSearchTerms } = useContext(MovieContext)

  return (
    <>
      Movie search:
      <input type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for movie by title... " />
    </>
  )
}