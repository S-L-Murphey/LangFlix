import React from "react"
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews"
import "./LangFlix.css"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

export const LangFlix = () => (
    <>
    <h1>Lang Flix</h1>
    <Route
      render={() => {
        if (localStorage.getItem("langflix_customer")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);

