import mysql from "mysql";

export const db = mysql.createConnection({ // define as credenciais de conexão com o banco de dados MYSQL
    host: "localhost",
    user: "root",
    password: "Isa@1234",
    database: "crud"
});