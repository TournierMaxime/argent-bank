import React, { Fragment } from "react"
import Logo from "../assets/images/argentBankLogo.png"
import { useSelector } from "react-redux"

const Nav = () => {
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated)
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
              Tony
            </a>
            <a className="main-nav-item" href="/">
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
