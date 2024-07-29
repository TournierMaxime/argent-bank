import React, { Fragment } from "react"
import Home from "../pages/Home"
import Login from "../pages/Login"
import { Route } from "react-router-dom"

const CommonRoutes = () => {
  const routes = [
    {
      path: "/",
      name: "Home",
      element: <Home />,
    },
    {
      path: "/sign-in",
      name: "Login",
      element: <Login />,
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

export default CommonRoutes
