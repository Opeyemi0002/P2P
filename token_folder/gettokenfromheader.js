const obtainToken = req => {
    try{
        const headerInfo = req.headers;
        const token = headerInfo["authorization"].split(' ')[1];

        if (!token) {
            return "token not found";
        }else {
            return token;
        }   
}catch(error) {
        res.json(error.message);
    }
}
export default obtainToken;