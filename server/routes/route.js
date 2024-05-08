import express from 'express';
import Signup from '../model/signup.js';


const signupUser = async(request,response)=>{
    try{
        const user = request.body;
        const newUser = new Signup(user);
        console.log("send request to signup");
        console.log(request.body);
        await newUser.save();
        console.log("signuped new user successfully");
        return response.status(200).json({msg: "Signup Suceefully"});
    }
    catch (error) {
        return response.status(500).json({msg: "Signup error"});
    }
    
}

const loginUser = async(request, response)=>{
    const userObject = await Signup.findOne({email: request.body.email});
    console.log(request.body);

    if(!userObject) {
        return response.status(404).json({msg: "User not found"});
    }

    let match = userObject.password === request.body.password;

    if(match) {
        console.log("login user successfully");
        return response.status(200).json({msg: "User sucessfully"});
    }
    else{
        console.log("Incorrect password");
        return response.status(500).json({msg: "Incorrect Password"});
    }
}


const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);


export default router;