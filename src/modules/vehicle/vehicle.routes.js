import { Router } from "express";
import VehicleController from "./vehicle.controller.js";

const router = Router();

router.get("/get-all-vehicles", VehicleController.getAllVehicles);

router.put("/update-vehicle/:plate", VehicleController.updateVehicle);


export default router;
