//schema
import mongoose from "mongoose";
import validator from "validator"

const userSchema=new mongoose.Schema({
    email:{
        type: String,
        required: true,
        lowercase: true,
        validate: (value) => {
            return validator.isEmail(value)
        }

    },
    password:{
        type:String,
        required:true
    },
})
export const UserModel=mongoose.model('users',userSchema);
export default UserModel