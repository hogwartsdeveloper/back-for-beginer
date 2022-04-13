import express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const DB_URL = `mongodb+srv://police:Police12@cluster0.nnice.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const PORT = 5001;
const app = express();

app.use(express.json())
app.use('/api', router)

async function startApp(){
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()
