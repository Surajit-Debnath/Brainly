import { model,Schema } from "mongoose";
import mongoose from "mongoose";

async function connect() {   
await mongoose.connect("mongodb+srv://surajit9830debnath:c5rKNNcBK6SA2Zwl@cluster0.4vycq0x.mongodb.net/Brainly")
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
