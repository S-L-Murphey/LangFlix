import React from "react"
import { Route } from "react-router-dom"
import { MovieProvider } from "./movie/MovieProvider"
import { MovieList } from "./movie/MovieList"
import { MovieSearch } from "./movie/MovieSearch"
import { About } from "./about/About"

export const ApplicationViews = () => {
    return (
        <>
            
            <MovieProvider>
                <Route exact path="/movies">
                    <MovieSearch />
                    <MovieList />
                </Route>
            </MovieProvider>

            <Route exact path="/about">
                    <About/>
                </Route>

        </>
    )
}