import express from "express";
import noteRouter from "./routes/noteRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import  cors  from "cors";
const app = express();

app.use(express.json())
app.use(cors());
app.get("/", (req,res)=>{
    res.send("hello i am server")
})
app.use("/api/notes", noteRouter)
app.use(errorMiddleware);

export default app