import Sequelize from "sequelize";
import db from "../db.js";
const schema = "";

class Produto extends Sequelize.Model {}
Produto.init(
    {
        Codigo: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        Descricao: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        DataCriacao: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        DataAtualizacao: {
            type: Sequelize.DATE,
            allowNull: true,
        },
    },
    {
        sequelize: db,
        modelName: "tbProduto",
        schema,
    }
);

export default Produto;
