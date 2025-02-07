import VehicleRepository from "./vehicle.repository.js";

const VehicleService = {

    async createVehicle(newVehicle) {
        const createdVehicle = await VehicleRepository.createVehicle(newVehicle);
        return createdVehicle;
      },

    async getAllVehicles() {
        const vehicles = await VehicleRepository.findAllVehicles();
        if (!vehicles.length) {
          throw new Error("No vehicles found.");
        }
        return vehicles;
      },

      async getVehicleByPlate(plate) {
        const vehicle = await VehicleRepository.findVehicleByPlate(plate);
        if (!vehicle) {
          throw new Error("Vehicle not found.");
        }
        return vehicle;
      },

      async isPlateExists(plate) {
        return await VehicleRepository.verifyPlateExists(plate);
      },

     async updateVehicle(plate, updatedData) {
        const updatedVehicle = await VehicleRepository.updateVehicle(plate, updatedData);
        if (!updatedVehicle) {
          throw new Error("Vehicle not found.");
        }
        return updatedVehicle;
      },

      async deleteVehicle(plate) {
        const deletedVehicle = await VehicleRepository.deleteVehicle(plate);
        if (!deletedVehicle) {
          throw new Error("Vehicle not found.");
        }
        return deletedVehicle;
      }
}

export default VehicleService;