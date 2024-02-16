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
            allowNull: true,
        },
        DataAtualizacao: {
            type: Sequelize.DATE,
            allowNull: true,
        },
    },
    {
        sequelize: database,
        modelName: "tbProduto",
        schema,
    }
);
