import {connect} from "@/dbConfig/dbConfig";
import Ad from "@/models/adModel";
import { NextRequest, NextResponse } from "next/server";


connect()


export async function GET(req: NextRequest, res: NextResponse){
    try {
    
        
        let results = await Ad.find({}).limit(10).sort({_id:-1})
          
          
      
          return NextResponse.json({
            message: "Ads fetched",
            success: true,
            results
        })
        

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}