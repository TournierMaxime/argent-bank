import React, { Fragment } from "react"
import Title from "../components/Title"
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <Fragment>
      <Title title={"Argent Bank - Home Page"} />
      <Nav />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Home
