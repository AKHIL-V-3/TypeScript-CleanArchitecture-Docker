import mongoose from 'mongoose'
import { model } from "mongoose";

interface Iuser{
      name:string,
      email:string,
      password:string
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String

})


const User = model<Iuser>('Users',userSchema)

export {User}

// module.exports = mongoose.model("User",userSchema)
