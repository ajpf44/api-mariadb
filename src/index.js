import express from "express";

const app = express();
const port = 8081;

app.get("/home", (req, res) => {
    res.send("Página principal");
});

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}/`);
});
