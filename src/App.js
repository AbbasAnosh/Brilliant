import React, { useEffect } from 'react'
import "./App.css"
import About from './components/About/About'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Works from './components/Works/Works'
import Testimonial from "../src/components/Testimonials/Testimonial"
import News from './components/News/News'
import NewsLetter from './components/NewsLetter/NewsLetter'
import Footer from './components/Footer/Footer'
import Copyright from './components/CopyRight/Copyright'
import ScrollTop from "../src/components/ScrollToTheTop/ScrollTop"

const App = () => {
  return (
    <div>
      <ScrollTop/>
      <Navbar/>
      <Header/>
      <Services/>
      <Works/>
      <About/>
      <Testimonial/>
      <News/>
      <NewsLetter/>
      <Footer/>
      <Copyright/>
    </div>
  )
}

export default App