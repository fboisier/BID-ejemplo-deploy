import React from 'react'
import { Link } from 'react-router-dom'

const ButtonHeader = ({ btnTxt, path }) => {
  return (
    <div className='flx lftSide pdng'>
      <Link to={path}><button>{btnTxt}</button></Link>
    </div>
  )
}

export default ButtonHeader