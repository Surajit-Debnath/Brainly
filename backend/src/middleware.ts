import type { NextFunction,Request,Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config.js";
export const userMiddleware=(req:Request,res:Response,next:NextFunction)=>{
   const header=req.headers["authorization"];
   const decoded=jwt.verify(header as string,JWT_PASSWORD);
   try{
          if(decoded){
      //@ts-ignore
      req.userId=decoded.id;
      next();
   }
   else{
       return res.status(403).json({
         message:"User not logged in"
   })
   }
   }catch(e){
      console.log(e);
   }
  
}