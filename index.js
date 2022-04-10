import express from "express";

const PORT = 5000;
const app = express();
app.use(express.json())

app.get('/', (req, res) => {
    console.log(req.query.third);
    res.status(200).json('Server job')
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json('server job')
})

app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))