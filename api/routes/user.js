import express from "express";
import { verifyToken, verifyTokenAuthorisation, verifyTokenAdmin } from "./verifyToken.js"
import User from "../models/User.js";

const router = express.Router();


//UPDATE
router.put("/:id", verifyTokenAuthorisation, async (req, res) => {
    if(req.body.password) {
        const salt = bcrypt.genSaltSync(10);
        req.body.password = bcrypt.hashSync(req.body.password, salt);
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedUser);
    } catch(err) {
        res.status(500).json(err);
    }
});

//DELETE 
router.delete("/:id", verifyTokenAuthorisation, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted successfully!")
    } catch(err) {
        res.status(500).json(err)
    }
});

//GET USER
router.get("/find/:id", verifyTokenAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const {password, ...others} = user._doc;

        res.status(200).json({...others});
    } catch(err) {
        res.status(500).json(err)
    }
});




//GET ALL USERS
router.get("/", verifyTokenAdmin, async (req, res) => {
    const query = req.query.new
    try {
        const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find()

        res.status(200).json({users});
    } catch(err) {
        res.status(500).json(err)
    }
});

//GET USERS STATS
router.get("/stats", verifyTokenAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
  });


export default router