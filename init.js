import "./db"
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";


const PORT = process.env.PORT || 3000;

const handleListening = () =>{
    console.log(`Listening on : http://localhost:${PORT}`);
}


app.listen(3000, handleListening);