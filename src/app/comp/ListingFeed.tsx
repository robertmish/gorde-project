"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
// import { getAds } from '../../../src/lib/mongo/mongoads'

// async function fetchAds() {
//   const { ads } = await getAds()
//   if (!ads) throw new Error('Failed to fetch ads')

//   return ads
// }

function ListingFeed() {
  // const ads = await fetchAds()
  const [data, setData] = useState([]);
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



  return (

<div className="listing_feed">

{/* <ul>
  {ads.map((ad: any): React.JSX.Element => (
    <li key={ad._id}>Company:{ad.companyName} Sallary: {ad.sallary}</li>
  ))}
</ul> */}

  <div className="job_listing" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
    
    <div className="mobile_wrapper">
    <div className="comp_logo">
    <div className="time_ago">• 4 hours ago</div>

      <Image
              src="/sopro_logo.jpeg"
              alt="SoPro Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /></div>

<div className="listing_info">
  <div className="comp_name">SoPro</div>
  <div className="job_position">Back-End Developer <span className='featured'>Featured</span></div>
  <div className="job_type">Remote • $5,000 - $7,000 / month</div>
</div>
</div>


<div className="job_skills">
  <div className="skill_name">SQL</div>
  <div className="skill_name">.NET</div>
  <div className="skill_name">API</div>
  <div className="skill_name">Azure</div>
  <div className="skill_name">JavaScript</div>
  <div className="skill_name">Python</div>
</div>

{hovered ? <button className='apply_job_btn'>Apply</button>: null}
  </div>

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

export default ListingFeed