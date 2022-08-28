import React from 'react'
import { Hero } from '../home/Hero'
import { About } from '../pages/About'
import Counter from '../pages/Counter'
import Portfolio from '../pages/Portfolio'
import Services  from '../pages/Services'
import Testimonials from '../pages/Testimonials'


const Home = () => {
  return (
    <>
    <Hero />
    <About />
    <Services />
    <Counter />
    <Portfolio />
    <Testimonials />
    </>
  )
}

export default Home