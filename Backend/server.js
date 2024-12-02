import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import router from "./routes/routes.js";

dotenv.config();
connectDB();

const app = express();

app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT;

app.use("/api",router);

app.listen(PORT ||5000, ()=>{
    console.log(`App listening on port ${PORT} || 5000.`);
})