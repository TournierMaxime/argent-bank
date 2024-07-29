import React, { Fragment } from "react"
import User from "../pages/User"
import { Route } from "react-router-dom"

const AuthenticatedRoutes = () => {
  const routes = [
    {
      path: "/",
      name: "User",
      element: <User />,
    },
    {
      path: "/user",
      name: "User",
      element: <User />,
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
