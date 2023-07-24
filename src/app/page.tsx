"use client"
import Image from 'next/image'
import {useRouter} from "next/navigation";
import Header from './comp/Header';
import Footer from './comp/Footer';
import ListingFeed from './comp/ListingFeed';
import { useState } from 'react';


export default async function Home() {

const router = useRouter();


const onClick = () => {

  router.push("/welcome");

}




  return (

<main>
<div className="home_section">

<Header/>
<div className="content_section">
  <div className="welcome_header mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Remote tech jobs</div>
  <p className='wel_desc mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>Where digital nomads live and breathe</p>
</div>

<div className="subscribe_box">
  <div className="call_text">Get</div>
  <div className="option_dropdown">
  <select name="employment_status" className="option_select">
            <option value="Вработен">Weekly</option>
            <option value="Невработен">Monthly</option>
            <option value="Сопствен бизнис">Daily</option>
        </select>
    </div>
    <div className="call_text">email of all new jobs!</div>
    <div className="email_input"><input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email"/></div>
    <button className='signup_btn'>Subscribe</button>
</div>
</div>
<div className="listings_section">
  <div className="listing_filter">
  <div className="filter_label active_filter">Newest /</div>
    <div className="filter_label">Most popular /</div>
    <div className="filter_label">Highest paying</div>
  </div>

<ListingFeed/>


</div>

<Footer></Footer>
</main>
  )
}
