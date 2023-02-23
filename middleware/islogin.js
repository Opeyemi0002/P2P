import obtainToken from "../token_folder/gettokenfromheader.js";
import verifyToken from "../token_folder/verifytoken.js";

const isLogin = (req,res,next) => {
    const token = obtainToken(req);
    const userDecoded = verifyToken(token);

    req.userAuth = userDecoded.id;

    if(!userDecoded)  {
        return res.json({
            status:"error",
            message:"kindly login because the token is either expired or invalid"
        });
    }else{
        next();
    }
}

export default isLogin;