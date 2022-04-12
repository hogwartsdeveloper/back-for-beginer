import express from "express";
import mongoose from "mongoose";
import Post from "./Post.js";

const DB_URL = `mongodb+srv://police:Police12@cluster0.nnice.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const PORT = 5001;
const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    console.log(req.query.third);
    res.status(200).json('Server job')
});

app.post('/', async (req, res) => {
    try {
        const { author, title, content, picture } = req.body
        const post = await Post.create({author, title, content, picture})
        res.json(post)
    } catch (e) {
        res.status(500).json(e)
    }
})

async function startApp(){
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()
