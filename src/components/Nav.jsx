import React, { Fragment } from "react"
import Logo from "../assets/images/argentBankLogo.png"
import { useSelector } from "react-redux"
import useHandleAuth from "../hooks/useHandleAuth"

const Nav = () => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated)
  const firstName = useSelector((state) => state.login.data.firstName)

  const { handleLogout } = useHandleAuth({ data: null })
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        {isAuthenticated ? (
          <Fragment>
            <a className="main-nav-item" href="/user">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </a>
            <a
              className="main-nav-item"
              onClick={() => handleLogout()}
              href="/"
            >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </a>
          </Fragment>
        ) : (
          <a className="main-nav-item" href="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        )}
      </div>
    </nav>
  )
}

export default Nav
