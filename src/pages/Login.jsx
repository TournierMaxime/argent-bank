import React, { Fragment } from "react"
import Title from "../components/Title"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import LoginForm from "../components/LoginForm"

const Login = () => {
  return (
    <Fragment>
      <Title title={"Argent Bank - Login Page"} />
      <Nav />
      <main>
        <LoginForm />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Login
