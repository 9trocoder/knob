import React from 'react'
import Hero from '../../components/Hero'
import Homes from '../../components/Homes'
import Navbar from '../../components/Navbar'

function Homepage() {
  return (
    <>
        <Navbar />
        <Hero />
        <Homes />
    </>
  )
}

export default Homepage