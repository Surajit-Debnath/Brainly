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
  tags:[{type:mongoose.Schema.Types.ObjectId,ref:'Tag'}],
  userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}

})
export const ContentModel=model("Content",ContentSchema);


const LinkSchema=new Schema({
  hash:String,
  userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true,unique:true}
 });
export const LinkModel=model("Links",LinkSchema);