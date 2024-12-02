import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

var currentdate = new Date();
var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth() 
+ "/" + currentdate.getFullYear() + " @ " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connection established on: ${datetime}`);
    } catch (error) {
        console.log(`Database connection failed: ${error}`);
        process.exit(1);
    }
}
export default connectDB;