import React from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <>
        <div className='bg-black w-full h-screen'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    </>
  )
}

export default Layout