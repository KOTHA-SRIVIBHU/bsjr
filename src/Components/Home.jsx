import React from 'react'
import About from './About'
import MI from './MI'
import Courses from './Courses'
import Gallery from './Gallery'
import Activities1 from './Activities'
import Contact from './Contact'

const Home = () => {
  return (
    <>
      <div id="home">
        <MI />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="academics">
        <Courses />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="activities">
        <Activities1 />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  )
}

export default Home 