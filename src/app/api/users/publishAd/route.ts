import {connect} from "@/dbConfig/dbConfig";
import Ad from "@/models/adModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


connect()


export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {companyName, jobTitle, skills, adUrl, sallary, postDateAdded, published} = reqBody

        console.log(reqBody);

        //check if user already exists
        const ad = await Ad.findOne({companyName})

        if(ad){
            return NextResponse.json({error: "Ad already exists"}, {status: 400})
        }

        const newAd = new Ad({
            companyName,
            jobTitle,
            skills,
            adUrl,
            sallary,
            postDateAdded,
            published,
        })

        const savedAd = await newAd.save()
        console.log(savedAd);


        return NextResponse.json({
            message: "Ad published",
            success: true,
            savedAd
        })
        
        


    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}