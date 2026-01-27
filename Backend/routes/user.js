const express = require("express");
const router = express.Router();
const {User} = require("../db");
const jwt = require("jsonwebtoken");
const {z} = require("zod");
const {JWT_SECRET}= require("../config");
const {authMiddleware }= require("../authMiddleware");
const {Account} = require("../db")

const signupBody = z.object({
    username : z.email(),
    firstname : z.string(),
    lastname : z.string(),
    password : z.string(),
})

router.post("/signup", async(req,res)=>{
    try{
    const success = signupBody.safeParse(req.body);
    if (!(success.success)){
       return res.status(411).json({
            msg : "error in the input."
        });
            }
    const existinguser= await User.findOne({
        username : req.body.username
        });
        if (existinguser){
            return res.status(411).json({
                msg : "username already exists"
            })
        };
        const user = await User.create({
            username : req.body.username,
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            password : req.body.password,
        });
        const userId = user._id;
         await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

        
        const token = jwt.sign({userId} , JWT_SECRET);

        res.json({
            msg : "user created successfull",
            token : token 
        })}
        catch(err){
            console.error("error in signup route")
            res.status(500).json({msg : "Internal server Error."})
        }
})


const signinBody = z.object({
    username : z.email(),
    password : z.string(),

})

router.post("/signin" , async(req , res)=>{
    try{
    const success = signinBody.safeParse(req.body);
    if (!success.success){
        return res.status(411).json({
            msg :  "Incorrect inputs."
        })
    }

    const user = await User.findOne({
        username : req.body.username ,
        password : req.body.password 
    }
    )
    if(user){
        const token = jwt.sign({
            userId : user._id , 
            }, JWT_SECRET);

      return  res.json({
            token : token 
        }) ;    

    }
res.status(411).json({
    msg : "no user found"
})}
catch(err){
    console.error("error in signin");
    res.status(500).json({msg : "Internal Server Error "})
}
})

const updateBody = z.object({
     firstname : z.string().optional(),
    lastname : z.string().optional(),
    password : z.string().optional(),
});

router.put("/", authMiddleware, async ( req , res ) => {
    try{
    const success = updateBody.safeParse(req.body);
    if(!success.success){
        return res.status(411).json({
            msg : "incorrect inputs"

        }); 

    }
    await User.updateOne({
        _id : req.userid
    } , req.body);
    res.json({
        message: "Updated successfully"
    })}
    catch(err){
        console.error("error in updation");
        res.status(500).json({msg : "Internal Server Error "})
    }
})

router.get("/bulk", async (req, res) => {
    try {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstname: {
                "$regex": filter
            }
        }, {
            lastname: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstname,
            lastName: user.lastname,
            _id: user._id
        }))
    })}
    catch(err){
        console.error("error in signin");
        res.status(500).json({msg : "Internal Server Error "})
    }
})

module.exports = router;