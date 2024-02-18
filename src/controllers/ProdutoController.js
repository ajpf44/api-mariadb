import produto from "../models/produto.js";

const controllerProduto = {
    async List(req, res) {
        res.header("Acess-Control-Allow-Origin", "*");
        res.header(
            "Acess-Control-Allow-Headers",
            "Origin,X-Requested-With,Content-Type,Accept"
        );

        try {
            const produtos = await produto.findAll();
            return res.json(produtos);
        } catch (err) {
            return console.log(err);
        }
    },
    async Create(req, res) {
        res.header("Acess-Control-Allow-Origin", "*");
        res.header("Acess-Control-Allow-Methods", "GET,PUT,POST,DELETE");
        console.log('Chegou no create')
        try {
            const produtos = await produto.create({
                Descricao: req.body.Descricao,
                DataCriacao: req.body.DataCriacao,
                DataAtualizacao: null,
            });

            return res.json(produtos);
        } catch (err) {
            console.log(err);
        }
    },
    async Update(req, res) {
        try {
            const prod = await produto.findByPk(req.body.Codigo);
            if (prod) {
                prod.Descricao = req.body.Descricao;
                prod.DataAtualizacao = new Date();
                await prod.save();
            }
            return res.json(prod);
        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },
    async GetOne(req, res) {
        try {
            const prod = await produto.findByPk(req.body.Codigo);
            return res.json(prod);
        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },
    async Delete(req, res) {
        try {
            const prod = await produto.findByPk(req.body.Codigo);
            await prod.destroy();

            7;

            return res.json(prod);
        } catch (erro) {
            return console.error("Erro na Update : ", erro);
        }
    },
};

export default controllerProduto
