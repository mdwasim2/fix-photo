import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/custom/Footer'
import Header from '../components/custom/Header'

const Rootlayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Rootlayout