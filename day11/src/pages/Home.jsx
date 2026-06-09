import React from 'react'
import Header from '../component/Header'
import Navbar from '../component/navbar'
import Footer from '../component/Footer'
import Card from '../component/Card'

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Card />
      <h1 style={{ backgroundColor: 'lightgray' }}>Welcome to React</h1>
      <Footer />
    </div>
  )
}

export default Home
