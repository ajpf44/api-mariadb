import express from "express";
import controllerProduto from "./controllers/ProdutoController.js";
const routes = express.Router();

routes.get("/List", controllerProduto.List);
routes.post("/Create", controllerProduto.Create);
routes.post("/Update", controllerProduto.Update);
// routes.get('/GetOne', controllerProduto.GetOne)
routes.post("/GetOne", controllerProduto.GetOne);
routes.delete("/Delete", controllerProduto.Delete);

export default routes;
