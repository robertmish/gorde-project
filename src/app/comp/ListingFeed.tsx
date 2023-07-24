"use client"
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import {useRouter} from "next/navigation";
import Link from 'next/link'

// const data = await getAds()
// console.log(data);


export default function ListingFeed() {

  const [published, setPublished] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = useState([
    {
      _id: '_idnumber',
      companyName: 'The Company Name',
      jobTitle: 'Job Title',
      skills: 'skills',
      sallary: '1,000',
      adUrl: 'https://example.com',
      postDateAdded: '',

    }
  ]);

 
  const fetchedAds = async () => {
    try {
        //Get the ads
        const response = await axios.get("/api/users/readAds");

        console.log(response.data.results);
        setData(response.data.results);
        
    } catch (error:any) {
        console.log("Fetched", error.message);
        
        toast.error(error.message);
    }finally {
        setLoading(false);
    }
}

const [hovered, setHovered] = useState(false);
 
const mouseEnter = () => {
setHovered(true);

}

const mouseLeave = () => {
  setHovered(false);
  
  }


 


//   const getUserId = async () => {
//     try {
//           //Get user id
//     const res = await axios.get('/api/users/getAds')
//     console.log(res.data);
//     setData(res.data)
//     } catch (error:any) {
//         toast.error(error.message);
//     }
// }
    
// const displayAds = async () => {
//   try {
   
//   const res = await axios.get('/api/users/getAds')
//   console.log(res.data);
//   setData(res.data)
//   console.log(data);
// } catch (error:any) {
//   toast.error(error.message);
// }
// };

fetchedAds()

  return (

<div className="listing_feed">


{data.map((ad)  => (
  <div className="job_listing" key={ad._id} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
    
    <div className="mobile_wrapper">
    <div className="comp_logo">
    <div className="time_ago">• 4 hours ago, {ad.postDateAdded}</div>

      <Image
              src="/sopro_logo.jpeg"
              alt="SoPro Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /></div>

<div className="listing_info">
  <div className="comp_name">{ad.companyName}</div>
  <div className="job_position">{ad.jobTitle} <span className='featured'>Featured</span></div>
  <div className="job_type">Remote • {ad.sallary} / month</div>
</div>
</div>


<div className="job_skills">
  <div className="skill_name">{ad.skills}</div>
</div>

{hovered ? <Link href={ad.adUrl}><button className='apply_job_btn'>Apply</button></Link>: null}
  </div>

))}

  <div className="job_listing" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
  <div className="mobile_wrapper">
    <div className="comp_logo">
    <div className="time_ago">• 6 hours ago</div>

      <Image
              src="/adeva_logo.png"
              alt="Adeva Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /></div>

<div className="listing_info">
  <div className="comp_name">Adeva</div>
  <div className="job_position">Front-End JavaScript Developer</div>
  <div className="job_type">Remote • $3,000 - $3,500 / month</div>
</div>
</div>
<div className="job_skills">
  <div className="skill_name">React</div>
  <div className="skill_name">TailwinCSS</div>
  <div className="skill_name">NextJS</div>
  <div className="skill_name">CSS</div>
  <div className="skill_name">JavaScript</div>
  
</div>

{hovered ? <button className='apply_job_btn'>Apply</button>: null}
  </div>



  <div className="job_listing" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
  <div className="mobile_wrapper">
    <div className="comp_logo">
    <div className="time_ago">• 12 hours ago</div>

      <Image
              src="/uber.jpeg"
              alt="Uber Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /></div>

<div className="listing_info">
  <div className="comp_name">Uber eats</div>
  <div className="job_position">Senior Android Developer</div>
  <div className="job_type">Remote • $7,000 - $12,500 / month</div>
</div>
</div>
<div className="job_skills">
  <div className="skill_name">Java</div>
  <div className="skill_name">Kotlin</div>
  <div className="skill_name">JavaScript</div>
  
</div>

{hovered ? <button className='apply_job_btn'>Apply</button>: null}
  </div>



</div>
  )
}

