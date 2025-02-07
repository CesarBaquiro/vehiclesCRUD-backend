import VehicleRepository from "./vehicle.repository.js";

const VehicleService = {

    async getAllVehicles() {
        const vehicles = await VehicleRepository.findAllVehicles();
        if (!vehicles.length) {
          throw new Error("No vehicles found.");
        }
        return vehicles;
      },

     async updateVehicle(plate, updatedData) {
        const updatedVehicle = await VehicleRepository.updateVehicle(plate, updatedData);
        if (!updatedVehicle) {
          throw new Error("Vehicle not found.");
        }
        return updatedVehicle;
      }
}

export default VehicleService;