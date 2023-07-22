import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function page() {
  return (
  <div className="create_wrapper">
    <div className="form_section">
    <Link href="/"><div className="logo ml-24 mt-8">RemoteNomads</div></Link>
        <div className="form_wrapper">
        <div className="form_header">Let's get started</div>

        <label className='form_label'>Company name</label>
        <input type="text" id="website-admin" className="form_input rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your company name"/>

        <label className='form_label'>Job title</label>
        <input type="text" id="website-admin" className="form_input rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Job title"/>
        
        <label className='form_label'>Skills needed</label>
        <input type="text" id="website-admin" className="form_input rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add skill"/>
        
   
   
        <label className='form_label'>URL to Job Description/Application Page *</label>
        <input type="text" id="website-admin" className="form_input rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://yourwebsite.com/job"/>

     
        <label>Company logo *</label>
        <div className='img_upload_btn'>
            
        <Image
              src="/file.svg"
              alt="SoPro Logo"
              className="dark:invert"
              width={50}
              height={50}
              priority
            />


        </div>

        <label className='form_label mt-5'>Sallary (optional)</label>
        <div className="sallary_segment">
        <input type="text" id="website-admin" className="sallary_input rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$"/>
        <select name="employment_status" className="option_select ml-2" id="employment-status">
            <option value="Вработен">Monthly</option>
            <option value="Невработен">Yearly</option>
            
        </select>
        </div>
        
        <button className='publish_btn'>Publish</button>

        </div>
    </div>
    <div className="edu_section">

        <div className="edu_wrapper">
        <div className="edu_header">Easiest way to reach out to the best talent</div>
        <div className="edu_bullets">


        <div className="edu_widget">
                <div className="edu_title">30 Days Homepage Visibility</div>
                <div className="edu_desc">Your job ad will stay on our homepage for 30 days, leaving maximum exposure to the best talent</div>
            </div>


            <div className="edu_widget">
                <div className="edu_title">Reach out to over 1,000 monthly job seekers</div>
                <div className="edu_desc">Digital nomads is one of the most visited job portals in the world with over 50,000 daily active users.</div>
            </div>

            <div className="edu_widget">
                <div className="edu_title">Expose your brand</div>
                <div className="edu_desc">Use DigitalNomads to spread brand awarness about your company throught the entire world</div>
            </div>

            
        </div>
    </div>
    </div>
  </div>
  )
}

export default page