import VehicleService from './vehicle.service.js';

const VehicleController = {

    async getAllVehicles(req, res) {
        try {
            const vehicles = await VehicleService.getAllVehicles();
            res.status(200).json(vehicles);
          } catch (error) {
            console.error(error.message);
            res.status(500).json({ success: false, message: error.message });
          }
    },

    async updateVehicle(req, res) {
        try {
          const { plate } = req.params; // Plate as vehicle identifier
          console.log(req.body);
          const { brand, model, series, color } = req.body; // Vehicle data to update
          const updatedVehicle = await VehicleService.updateVehicle(plate, { brand, model, series, color }); 
      
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
      }
      

}

export default VehicleController;