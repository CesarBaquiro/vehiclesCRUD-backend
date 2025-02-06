import express from "express";
import { PORT } from "./src/config/config.js";
import cors from "cors";
import db from "./db.js";

const app = express();

// Allows requests only from http://localhost:4200
app.use(cors({ origin: "http://localhost:4200" }));

// Basic route
app.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM vehicle"); // Asynchronous database querying
    if (!rows.length) {
      console.log("No vehicles found");
      return res.status(404).send("No vehicles found"); 
    }
    console.log(rows); // Print the vehicles to the console
    res.json(rows); // Send response JSON
  } catch (err) {
    console.error('Error al obtener los vehículos:', err);
    res.status(500).send('Error en la consulta de base de datos'); // Send an error response
  }
});


const httpServer = app.listen(PORT, () => {
    console.log(`Server reunning on Port http://localhost:${PORT}`);
  });
  