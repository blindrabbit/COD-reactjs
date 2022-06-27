import type { Knex } from "knex";

const config: Knex.Config = {
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "codreactjs-ondemand",
  },
  pool: {
    min: 2,
    max: 10,
  },
};

export default config;

//const db = require('knex')({
//  client: 'mysql',
// connection: {
//    host: '127.0.0.1',
//   port: 3306,
//  user: 'root',
// password: '',
//database: 'CODreactjs-ondemand'
//   }
//});
