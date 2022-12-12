import React, { children } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    <Footer/>
    </>
  )
}
