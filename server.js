import express from "express";
import { PORT } from "./src/config/config.js";

const app = express();

// Ruta básica
app.get("/", (req, res) => {
    res.send("¡Vehicles CRUD backend is running!");
  });

const httpServer = app.listen(PORT, () => {
    console.log(`Server reunning on Port http://localhost:${PORT}`);
  });
  