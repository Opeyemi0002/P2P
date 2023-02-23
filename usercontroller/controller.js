import User from "../Model/usermodel.js";
import bcrypt from "bcrypt";
import tokenGenerator from "../token_folder/gettoken.js";

export const registerController = async (req,res) => {
    try{
        const {firstname,lastname,age,gender,email,password} = req.body;
        const userName = await User.findOne({email});

        if(!userName) {
            const salt = await bcrypt.genSalt(10);
            const passwordHash = await bcrypt.hash(password, salt);
            const newUser = await User.create({
                firstname,
                lastname,
                 age,
                 gender,
                 email,
                 password:passwordHash
            });
            return res.json({
                status:"success",
                message: `${newUser.firstname}, welcome to the world of possibilities`
            });
        }else{
            return res.json({message:"you have been registered already"});
        }
    }catch(error) {
        res.json(error.message);
    }
}
export const loginController = async (req,res) => {
    try{
        const {email,password} = req.body;
        const userFound = await User.findOne({email});

        if(!userFound) {
            return res.json({message: "please enter a valid username or password"});
        }
        
        const checkpassword = await bcrypt.compare(password,userFound.password);
        if(!checkpassword) {
            return res.json({message:"please enter a valid username or password"});
        }else{
            res.json({
                status:"success",
                data: {
                    firstname:userFound.firstname,
                    lastname:userFound.lastname,
                    token: tokenGenerator(userFound._id)
                }
            });
        }
    }catch(error) {
        res.json(error.message);
    }
}