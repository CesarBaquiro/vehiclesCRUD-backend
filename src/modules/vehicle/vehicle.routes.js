import { Router } from "express";
import VehicleController from "./vehicle.controller.js";

const router = Router();

router.post("/create-vehicle", VehicleController.createVehicle);

router.get("/get-all-vehicles", VehicleController.getAllVehicles);

router.get("/get-vehicle/:plate", VehicleController.getVehicleByPlate);

router.get("/check-plate-exists/:plate", VehicleController.validatePlate);

router.put("/update-vehicle/:plate", VehicleController.updateVehicle);

router.delete("/delete-vehicle/:plate", VehicleController.deleteVehicle);


export default router;
