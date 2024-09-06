import { BrowserRouter as Router, Routes } from "react-router-dom"
import CommonRoutes from "./router/CommonRoutes"
import AuthenticatedRoutes from "./router/AuthenticatedRoutes"
import React, { Fragment } from "react"
import { connect, Provider } from "react-redux"
import { store, persistor } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react"

function App({ isAuthenticated }) {
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
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedApp />
    </PersistGate>
  </Provider>
)

export default AppWithRedux
