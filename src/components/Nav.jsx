import React, { Fragment, useEffect } from "react"
import Logo from "../assets/images/argentBankLogo.png"
import { useDispatch, useSelector } from "react-redux"
import useHandleAuth from "../hooks/useHandleAuth"
import { oneUser } from "../redux/actions/user"

const Nav = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated)
  const token = useSelector((state) => state.login.data.token)
  const user = useSelector((state) => state.oneUser.data)

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(oneUser(token))
    }
  }, [isAuthenticated])

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
            <a className="main-nav-item" href="/profile">
              <i className="fa fa-user-circle"></i>
              {user?.firstName}
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
          <a className="main-nav-item" href="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        )}
      </div>
    </nav>
  )
}

export default Nav
