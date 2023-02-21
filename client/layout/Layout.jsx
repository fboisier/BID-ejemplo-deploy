import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {

  return (
    <>
      <div className='headerDojo'>
        <h1 className='txtBig'>Voting Dojo</h1>
      </div>
      <Outlet />
    </>
  )
}

export default Layout