import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import productRoute from "./routes/product.js";
import cartRoute from "./routes/cart.js";
import orderRoute from "./routes/order.js";
import cors from "cors";


const app = express()
dotenv.config();



const corsOptions = {
    origin: "YOUR_CLIENT_URL",
    credentials: true,
}

mongoose.set('strictQuery', true);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connect to DB successfully")
    } catch(err) {
        console.log(err);
    }
}



app.use(cors(corsOptions))
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);





app.listen(process.env.PORT || 3000, ()=>{
    connect()
    console.log("Serveur is running")
});