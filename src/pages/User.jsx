import React, { Fragment } from "react"
import Title from "../components/Title"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Account from "../components/Account"

const Home = () => {
  return (
    <Fragment>
      <Title title={"Argent Bank - Home Page"} />
      <Nav />
      <main className="main bg-dark">
        <Account />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Home
