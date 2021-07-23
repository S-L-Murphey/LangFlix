import React, { useContext, useRef } from "react"
import { MovieContext } from "./MovieProvider"
import "./Movie.css"

export const MovieSearch = () => {
  const { setSearchTerms } = useContext(MovieContext)

  const searchInfo = useRef()
  const handleClick = () => {
      setSearchTerms(searchInfo.current.value)
  }

  return (
    <>
    <div className="search">
      Movie search:</div>
      <div className="search__box">
      <input ref={searchInfo} type="text" id="text"
        className="input--wide"
        
        placeholder="Search for movie by title" />
        </div>
        <button onClick={handleClick}>Search</button>
        
        
    </>
  )
}