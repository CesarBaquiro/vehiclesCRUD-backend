import mysql2 from "mysql2/promise";
import dotenv from "dotenv";
import {
  DB_PORT,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
} from "./src/config/config.js";

dotenv.config();

// Configuration to connect the db
const db = mysql2.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default db;
