import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        }, 

        product: [
            {
                productId: {
                    type: String
                }, 
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ]

    }, {timestamps: true}
);

export default mongoose.model("Cart", CartSchema)