import express from "express";
import { PORT } from "./src/config/config.js";
import cors from "cors";
import vehicleRoutes from "./src/modules/vehicle/vehicle.routes.js";

// Express app

const app = express();

// Allows requests only from http://localhost:4200
app.use(cors({ origin: "http://localhost:4200" }));

// Basic route
app.get("/", (req, res) => {
  res.send("¡Hi vehicles CRUD!");
});

// Middleware to process JSON in the body
app.use(express.json());

//  Routes implementation
app.use("/api/v1", vehicleRoutes);


const httpServer = app.listen(PORT, () => {
    console.log(`Server reunning on Port http://localhost:${PORT}`);
  });
  