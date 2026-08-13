import { model,Schema } from "mongoose";
import mongoose from "mongoose";
import { Mongodb_Url } from "./config.js";

async function connect() {   
await mongoose.connect(Mongodb_Url);
console.log("Mongodb is connectd");
}
connect();


const UserSchema=new Schema({
    username:{type:String,require:true},
    password:{type:String,require:true}
})

export const UserModel=model("User",UserSchema)

const ContentSchema=new Schema({
  title:String,
  link:String,
  tags:[{type:mongoose.Types.ObjectId,ref:'Tag'}],
  userId:{type:mongoose.Types.ObjectId,ref:'User',require:true}

})
export const ContentModel=model("Content",ContentSchema);
