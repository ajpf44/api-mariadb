import express from "express";
import cors from "cors"
import routes from "./router.js"

const api = express();
const port = 8081;

api.use(cors())
api.use(express.json())
api.use(routes)

api.get("/home", (req, res) => {
    res.send("Página principal");
});

api.listen(port, () => {
    console.log(`server running on http://localhost:${port}/`);
});
