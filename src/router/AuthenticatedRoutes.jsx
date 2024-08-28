import React, { Fragment } from "react"
import User from "../pages/User"
import Home from "../pages/Home"
import Error from "../pages/Error"
import { Route } from "react-router-dom"

const AuthenticatedRoutes = () => {
  const routes = [
    {
      path: "/",
      name: "Home",
      element: <Home />,
    },
    {
      path: "/profile",
      name: "User",
      element: <User />,
    },
    {
      path: "*",
      name: "Error",
      element: <Error />,
    },
  ]

  return (
    <Fragment>
      {routes.map((route, idx) => {
        if (route.name === "Login") {
          return (
            <Route index key={idx} path={route.path} element={route.element} />
          )
        } else {
          return <Route key={idx} path={route.path} element={route.element} />
        }
      })}
    </Fragment>
  )
}

export default AuthenticatedRoutes
