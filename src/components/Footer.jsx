import React from 'react'

const Footer = () => {
  return (
    <nav className='navbar navbar-info bg-info d-flex justify-content-center align-items-center mt-2'>
        <p className='text-dark fw-bold'>Camilo Torres - &copy; {new Date().getFullYear()}</p>
    </nav>
  )
}

export default Footer