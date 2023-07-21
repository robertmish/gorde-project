import React from 'react'
import Header from '../comp/Header'
import Footer from '../comp/Footer'

function Page() {
  return (
    

<main>

<Header></Header>

<div className="content_section">
  <div className="welcome_header mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">About</div>
  <p className='wel_desc mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>Welcome to the about page</p>
</div>
<Footer></Footer>
</main>
  )
}

export default Page