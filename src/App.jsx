import { BrowserRouter as Router, Routes } from "react-router-dom"
import CommonRoutes from "./router/CommonRoutes"
import AuthenticatedRoutes from "./router/AuthenticatedRoutes"
import React, { Fragment, useEffect } from "react"
import { connect, Provider } from "react-redux"
import store from "./redux/store"
import useUserData from "./hooks/useUserData"

function App({ isAuthenticated, onLoginSuccess }) {
  const { getUserData } = useUserData({
    onLoginSuccess,
  })

  useEffect(() => {
    getUserData()
  }, [])

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

const mapStateToProps = (state) => ({
  isAuthenticated: state.login.isAuthenticated,
  data: state.login.data,
})

const login = (dispatch) => ({
  onLoginSuccess: (response) => {
    dispatch({ type: "LOGIN_USER_SUCCESS", payload: response })
  },
})

const ConnectedApp = connect(mapStateToProps, login)(App)

const AppWithRedux = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
)

export default AppWithRedux
