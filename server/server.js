import app from "./app.js"
import { configDotenv } from "dotenv"
import connectdb from "./configs/db.js";
configDotenv();
const port = process.env.PORT;
connectdb();
app.listen(port, ()=>{
    console.log(`server is running on the port ${port}`)
})