module.exports = (req,res,next)=>{
    if(req.body){
        next();
    }else{
        res.status(403).send({
            errorMessage:'You need a payload'
        })
    }
      
       
    }