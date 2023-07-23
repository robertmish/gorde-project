"use client";
import Image from 'next/image'
import Link from 'next/link'

import axios from "axios";
import React, {useState, useEffect} from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";


function page() {

  const router = useRouter()
    const [data, setData] = useState("data");
    const [loading, setLoading] = React.useState(false);
    const [published, setPublished] = React.useState(false);

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
    const [ad, setAd] = React.useState({
        companyName: "",
        jobTitle: "",
        skills: "",
        adUrl: "",
        sallary: "",
        postDateAdded: date,
    })


    const publishAd = async () => {
        try {
            //publish the post data to mongodb
            const response = await axios.post("/api/users/publishAd", ad);
            console.log("Publish success", response.data);
            setPublished(true);
            router.push("/success");
            
        } catch (error:any) {
            console.log("Publish failed", error.message);
            
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }




  return (
  <div className="create_wrapper">
    <div className="form_section">
    <Link href="/"><div className="logo ml-24 mt-8">RemoteNomads</div></Link>
        <div className="form_wrapper">
        <div className="form_header">Your ad was published!</div>
        <div className="form_desc">Soon you'll start recieving some resumes. Make sure you check your email regularly.</div>
        </div>
    </div>
    <div className="edu_section">

        <div className="edu_wrapper">
        <div className="edu_header">Easiest way to reach out to the best tech talent, globally.</div>
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