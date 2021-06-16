import React from "react"
import { Route } from "react-router-dom"
import { MovieProvider } from "./movie/MovieProvider"
import { MovieList } from "./movie/MovieList"
import { MovieSearch } from "./movie/MovieSearch"
import { About } from "./about/About"
import { UserLikesProvider } from "./userLike/UserLikesProvider"
import { UserLikeList } from "./userLike/UserLikeList"

export const ApplicationViews = () => {
    return (
        <>

            <MovieProvider>
                <Route exact path="/movies">
                    <MovieSearch />
                    <MovieList />
                </Route>

                <UserLikesProvider>
                    
                    <Route exact path="/userProfile">
                        <UserLikeList />
                    </Route>
                    
                </UserLikesProvider>

            </MovieProvider>


            <Route exact path="/about">
                <About />
            </Route>

        </>
    )
}