import React from "react"
import { Route } from "react-router-dom"
import { MovieProvider } from "./movie/MovieProvider"
import { MovieList } from "./movie/MovieList"
import { MovieSearch } from "./movie/MovieSearch"
import { About } from "./about/About"
import { UserLikesProvider } from "./userLike/UserLikesProvider"
import { UserLikeList } from "./userLike/UserLikeList"
import { UserProvider } from "./user/UserProvider"
import { UserProgressBar } from "./user/UserProgressBar"
import { UserLikeDetail } from "./userLike/UserLikeDetail"

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
                        <UserProgressBar />
                        <UserLikeList />
                    </Route>

                    
                        <Route exact path="/userProfile/detail/:filmIdentifier">
                            <UserLikeDetail />
                        </Route>
                    

                </UserLikesProvider>

            </MovieProvider>


            <Route exact path="/about">
                <About />
            </Route>

        </>
    )
}