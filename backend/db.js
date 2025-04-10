import mysql from "mysql";

export const db = mysql.createConnection({ // define as credenciais de conexão com o banco de dados MYSQL
    host: "",
    user: "",
    password: "",
    database: ""
});
