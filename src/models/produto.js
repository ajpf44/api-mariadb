import Sequelize from "sequelize";
import db from "../db.js";
const schema = "";

class Produto extends Sequelize.Model {}

try {
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
            modelName: "tbProdutos",
            schema,
        }
    );
    db.sync()
    console.log('Create table suceffuly')
} catch (err) {
    console.log('Error creating table')
}


export default Produto;
