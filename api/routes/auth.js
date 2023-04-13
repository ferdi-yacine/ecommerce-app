import express from "express";
import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

const router = express.Router();

//REGISTER
router.post("/register", async (req, res) => {

    console.log(req.body)

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash
    })

    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser);
    } catch(err) {
        res.status(500).json(err);
    }  
});


//LOGIN
router.post("/login", async (req, res) => {
    try {

        const user = await User.findOne({username: req.body.username});
        if (!user){
            res.status(400).json("Wrong credential! Please try again")
        }
        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isPasswordCorrect){
            res.sendStatus(400).json("Wrong name or password")
            
        }
        

        const accessToken = jwt.sign({
            id: user._id, isAdmin: user.isAdmin
        }, `${process.env.JWT_SEC}`, {expiresIn: "3d"});

        const {password, ...otherDetails} = user._doc;

        
        
        res.status(200).json({...otherDetails, accessToken})

    } catch(err) {
        res.status(500).json(err)
        console.log(err)
    }
})


export default router