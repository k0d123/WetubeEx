import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 3000;

const handleListening = () =>{
    console.log(`Listening on : http://localhost:${PORT}`);
}

const handlehome = (req, res) =>{
    res.send("hello from home");
}


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan("dev"));
app.use(helmet());

app.get("/", handlehome);

app.listen(3000, handleListening);