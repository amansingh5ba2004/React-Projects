// eslint-disable-next-line no-unused-vars
import React from 'react'
import  Footer  from './Components/Footer/Footer';
import Header from './Components/Header/Header'
import {Outlet} from 'react-router-dom'




function Layout() {
  return (
   <>
   <Header />
   <Outlet />
   <Footer />
   </>
  )
}

export default Layout
