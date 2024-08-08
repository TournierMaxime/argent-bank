import React, { Fragment } from "react"
import Title from "../components/Title"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Account from "../components/Account"

const User = () => {
  return (
    <Fragment>
      <Title title={"Argent Bank - User Page"} />
      <Nav />
      <main className="main bg-dark">
        <Account />
      </main>
      <Footer />
    </Fragment>
  )
}

export default User
