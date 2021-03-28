const PORT = process.env.PORT || 3000;

const development = {
    username: "root",
    password: process.env.PASSWORD || "",
    database: process.env.DATABASE || "tienda_libros",
    host: process.env.HOST || "127.0.0.1",
    dialect: process.env.DIALECT || "mysql",
};
const test = {
    username: process.env.USERNAME || "root",
    password: process.env.PASSWORD || "",
    database: process.env.DATABASE || "tienda_libros",
    host: process.env.HOST || "127.0.0.1",
    dialect: process.env.DIALECT || "mysql",
};
const production = {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
};

module.exports = {
    PORT,
    development,
    test,
    production,
}