import express from "express";
import jwt from "jsonwebtoken";
import { UserModel,ContentModel,LinkModel } from "./db.js";
import { JWT_PASSWORD } from "./config.js";
import { userMiddleware } from "./middleware.js";
import { random } from "./utils.js";
import mongoose from "mongoose";
import { Mongodb_Url } from "./config.js";
import cors from "cors";
const app=express();

async function start() {
  try {
    await mongoose.connect(Mongodb_Url);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

start();


app.use(express.json());
app.use(cors());
app.post("/api/v1/signup",async (req,res)=>{
    //Zod validation and hash the password
const username=req.body.username;
const password=req.body.password;
try{
    await UserModel.create({
    username:username,
    password:password
    })
   return res.json({
    message:"User Signed in"
    })
}catch(e){
    return res.status(411).json({
        message:"User already exist"
    })
}

})

app.post("/api/v1/login",async (req,res)=>{
     const username=req.body.username;
     const password=req.body.password;
     const exsistingUser=await UserModel.findOne({
        username,password
     })
     if(exsistingUser){
        const token=jwt.sign({id:exsistingUser._id},JWT_PASSWORD)
     
        res.json({
           token
        })
    }
    else{
        return res.status(403).json({
            message:"Incorrect Credentials!"
        })
    }


})





app.post("/api/v1/content",userMiddleware,async (req,res)=>{
    const title=req.body.title;
    const link=req.body.link;
    try{
        await ContentModel.create({
        title,
        link,
        //@ts-ignore
        userId:req.userId,
        tags:[]
    })

    return res.json({
        message:"content added"
    })
    }catch(e){
        console.log(e);
    }
    
})

app.get("/api/v1/content",userMiddleware,async(req,res)=>{
    //@ts-ignore
    const userId=req.userId;
    const content=await ContentModel.find({
        userId
    }).populate("userId","username");
    return res.json({
        content
    })
})

app.delete("/api/v1/content",userMiddleware,async(req,res)=>{
    const stringId=req.body.Id;
    const contentId=new mongoose.Types.ObjectId(stringId);
    //@ts-ignore
    const userId=req.userId;
    await ContentModel.deleteMany({
        _id:contentId,
        userId:userId
    })
    return res.json({
        message:"Deleted"
    })
})





app.post("/api/v1/brain/share",userMiddleware,async(req,res)=>{
     const share=req.body.share;
     //@ts-ignore
     const userId=req.userId;
     if(share){
        const exisitingHash=await LinkModel.findOne({
            //@ts-ignore
            userId:req.userId
        });
        if(exisitingHash){
           res.json({
            hash:exisitingHash.hash
           })
           return;
        }
        const hash=random(10);
        await LinkModel.create({
            userId:userId,
            hash:hash
        });
        res.json({
            hash
        })
     }else{
        await LinkModel.deleteOne({
            userId
        });
         res.json({
           message:"Removed link"
         })
     } 
})

app.get("/api/v1/brain/:shareLink",async(req,res)=>{
      const hash=req.params.shareLink;
      const link=await LinkModel.findOne({
        hash
      })
      if(!link){
        res.status(411).json({
            message:"Sorry incorrect input"
        });
        return ;
      }
      const content=await ContentModel.find({
        userId:link.userId
      });
      const user=await UserModel.findOne({
        _id:link.userId
      });
      res.json({
        username:user?.username,
        content:content
      })

})


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
});