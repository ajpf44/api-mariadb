import Sequelize from "sequelize";
const db = new Sequelize("armazem", "ajpf", "", {
    host: "localhost",
    dialect: "mariadb",
});

try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

db.sync();

export default db;
