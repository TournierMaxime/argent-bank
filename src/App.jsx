import { BrowserRouter as Router, Routes } from "react-router-dom"
import CommonRoutes from "./router/CommonRoutes"
import AuthenticatedRoutes from "./router/AuthenticatedRoutes"
import React, { Fragment } from "react"

function App() {
  let isAuthenticated = false
  return (
    <Fragment>
      <Router>
        {isAuthenticated ? (
          <Routes>{AuthenticatedRoutes()}</Routes>
        ) : (
          <Routes>{CommonRoutes()}</Routes>
        )}
      </Router>
    </Fragment>
  )
}

export default App
