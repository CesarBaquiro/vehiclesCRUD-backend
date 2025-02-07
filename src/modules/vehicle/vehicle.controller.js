import VehicleService from './vehicle.service.js';

const VehicleController = {

    async createVehicle(req, res) {
        try {
          const { plate, brand, model, series, model_year, color } = req.body;

          if(!plate || !brand || !model || !series || !model_year || !color) {
            return res.status(400).json({
              success: false,
              message: "All required fields"
          });
        }
          const newVehicle = await VehicleService.createVehicle({ plate, brand, model, series, model_year, color });


          res.status(201).json({
            success: true,
            message: "Vehicle created successfully",
            vehicle: newVehicle
          });
        } catch (error) {
          console.error(error.message);
          res.status(500).json({
            success: false,
            message: error.message
          });
        }
    },

    async getAllVehicles(req, res) {
        try {
            const vehicles = await VehicleService.getAllVehicles();
            res.status(200).json(vehicles);
          } catch (error) {
            console.error(error.message);
            res.status(500).json({ success: false, message: error.message });
          }
    },

    async getVehicleByPlate(req, res) {
        try {
          const { plate } = req.params;
          const vehicle = await VehicleService.getVehicleByPlate(plate);
      
          if (!vehicle) {
            return res.status(404).json({
              success: false,
              message: "Vehicle not found"
            });
          }
      
          res.status(200).json(vehicle);
      
        } catch (error) {
          console.error(error.message);
          res.status(500).json({
            success: false,
            message: error.message
          });
        }
    },

    async validatePlate(req, res) {
        try {
          const { plate } = req.params;
          const exists = await VehicleService.isPlateExists(plate);
      
          if (exists) {
            return res.status(200).json({"exists": true, "message": "The plate is already registered"});
          }
      
          return res.status(400).json({"exists": false});
      
        } catch (error) {
          console.error(error.message);
          res.status(500).json({
            success: false,
            message: error.message
          });
        }
    },

    async updateVehicle(req, res) {
        try {
          const { plate } = req.params; // Plate as vehicle identifier
          const { brand, model, series, model_year, color } = req.body; // Vehicle data to update
          const updatedVehicle = await VehicleService.updateVehicle(plate, { brand, model, series, model_year, color }); 
      
          if (!updatedVehicle) {
            return res.status(404).json({
              success: false,
              message: "Vehicle not found"
            });
          }
      
          res.status(200).json({
            success: true,
            message: "Vehicle updated successfully",
            vehicle: updatedVehicle
          });
      
        } catch (error) {
          console.error(error.message);
          res.status(500).json({
            success: false,
            message: error.message
          });
        }
      },

      async deleteVehicle(req, res) {
        try {
          const { plate } = req.params;
          const deletedVehicle = await VehicleService.deleteVehicle(plate);
      
          if (!deletedVehicle) {
            return res.status(404).json({
              success: false,
              message: "Vehicle not found"
            });
          }
      
          res.status(200).json({
            success: true,
            message: "Vehicle deleted successfully",
            vehicle: deletedVehicle
          });
      
        } catch (error) {
          console.error(error.message);
          res.status(500).json({
            success: false,
            message: error.message
          });
        }
      }

}

export default VehicleController;