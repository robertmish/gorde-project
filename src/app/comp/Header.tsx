import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>

<div className='header'>
 <Link href="/"><div className="logo">CNN</div></Link>
  <div className="menu">
  <Link href="/about"><div className="menu_item">About</div></Link>
  <Link href="/services"><div className="menu_item">Services</div></Link>
  <Link href="/contact"><div className="menu_item">Contact</div></Link>
  <Link href="/projects"> <div className="menu_item">Projects</div></Link>
    <div className="menu_item login_btn">Login</div>
  </div>
</div>



    </>
  )
}

export default Header