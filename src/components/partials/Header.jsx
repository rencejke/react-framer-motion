import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const Header = () => {
  return (

    <header className='text-[24px]'>
      <div className='container flex justify-between pt-5'>
     <Logo/>
      <Menu/>
    </div>
    </header>
  )
}

export default Header
