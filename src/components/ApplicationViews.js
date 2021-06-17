import React from "react"
import { Route } from "react-router-dom"
import { MovieProvider } from "./movie/MovieProvider"
import { MovieList } from "./movie/MovieList"
import { MovieSearch } from "./movie/MovieSearch"
import { About } from "./about/About"
import { UserLikesProvider } from "./userLike/UserLikesProvider"
import { UserLikeList } from "./userLike/UserLikeList"
import { UserProvider } from "./user/UserProvider"

export const ApplicationViews = () => {
    return (
        <>

            <MovieProvider>
                <UserProvider>
                    <Route exact path="/movies">
                        <MovieSearch />
                        <MovieList />
                    </Route>
                </UserProvider>

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