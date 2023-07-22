function authentiation(req,res,next) {
    const check=true;
        if(check){
            // console.log("authentiazed");
            next();
        }else{
            res.status(401);
            throw new Error("sorry you cannot access");
        }
    }

    
module.exports=authentiation;