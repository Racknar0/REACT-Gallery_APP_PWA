import React from 'react'
import Container from './components/Container'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-dark'>
      <h1 className='text-center text-white fw-bold'>Galery App React</h1>
      <hr />
      <Container />
      <Footer />
    </div>
  )
}

export default App