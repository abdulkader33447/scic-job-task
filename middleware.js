import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const middleware =async (req)=>{
const token = await getToken({req,secret:process.env.NEXTAUTH_SECRET})
const {pathname} = req.nextUrl;

//protect dashboard
if(pathname.startWith("/dashboard")){
    if(!token){
        return NextResponse.redirect(new URL("/register",req.url))
    }
}
return NextResponse.next()

}
export const config ={
    matcher:["/dashboard/:path*"]
}
export default middleware;