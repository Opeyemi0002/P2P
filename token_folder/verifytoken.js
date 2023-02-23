import jwt from "jsonwebtoken";

const verifyToken = (token) => {
    try{
        return jwt.verify(token,process.env.Token_Key, (error, decoded) => {
            if(error) {
                return false; 
            }
            else {
                return decoded;
            }
    } );
    }catch(error) {
        res.json(error.message);
    }
}

export default verifyToken;