import UserModel from "../Model/userScheme.js";

export const adddata=async(req,res)=>{
    try {
        if(req.body.email !=="" && req.body.password!==""){
            const user=await UserModel.create(req.body);
            res.status(200).json({message:"user data store successful",user,rd:true});
        }else{
            res.status(400).json({message:"user data is empty",rd:false}); 
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:`Internal server Error ${error}`,error,rd:false})
    }
}
export const getuser =async(req,res)=>{
    try {
        let userlist=await UserModel.find({});
        if(userlist){
            res.status(200).json({message:"userlist fetching  successful",userlist,rd:true});
        }else{
            res.status(400).json({message:"userlist faild",rd:true});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message:`Internal server Error ${error}`,error,rd:false})
    }
}