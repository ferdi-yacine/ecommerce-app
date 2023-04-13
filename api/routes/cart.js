import express from "express";
import { verifyToken, verifyTokenAuthorisation, verifyTokenAdmin } from "./verifyToken.js"
import Cart from "../models/Cart.js";

const router = express.Router();

//CREATE
router.post("/",verifyToken, async (req, res) => {
    const newCart = new Cart(req.body)

    try {

        const savedCart = await newCart.save();
        res.status(200).json(savedCart);

    } catch(err) {
        res.status(500).json(err)
    }
})


//UPDATE
router.put("/:id", verifyTokenAuthorisation, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedCart);
    } catch(err) {
        res.status(500).json(err);
    }
});

//DELETE 
router.delete("/:id", verifyTokenAuthorisation, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted successfully!")
    } catch(err) {
        res.status(500).json(err)
    }
});

//GET USER CART
router.get("/find/:userid",verifyTokenAuthorisation,  async (req, res) => {
    try {
        const cart = await Cart.findOne({userId: req.params.userid})
        res.status(200).json(cart);
    } catch(err) {
        res.status(500).json(err)
    }
});

//GET ALL USERS CART

router.get("/", verifyTokenAdmin, async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch(err) {
        res.status(500).json(err);
    }
})



export default router