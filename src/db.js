import sequelize from "sequelize";
const db = new sequelize("armazem", "root", "", {
    host: "localhost",
    dialect: "mariadb",
});

db.sync();

export default db;
