import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>

<div className='header'>
 <Link href="/"><div className="logo">RemoteNomads</div></Link>
  <div className="menu">
  <Link href="/create"><div className="menu_item login_btn">Post a job</div></Link>
  </div>
</div>



    </>
  )
}

export default Header