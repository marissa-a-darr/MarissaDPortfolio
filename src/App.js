import React from "react"
import Header from "./components/Header/header";
import AboutMe from "./components/aboutme/about"
import Resume from "./components/Resume/resume"
import Portfolio from "./components/Resume/resume"
import Contact from "./components/ContactMe/contactme"
import Footer from "./components/Footer/footer"

const App = () => {
  return (
    <>
    <Header/>
    <AboutMe/>
    <Resume/>
    <Portfolio/>
    <Contact/>
    </>
  )
}
export default App;