import db from "../../../db.js";

export default class UserRepository {

    static async createVehicle(newVehicle) {
        try {
            const [result] = await db.query(
              "INSERT INTO vehicle (plate, brand, model, series, model_year, color) VALUES (?, ?, ?, ?, ?, ?)",
              [newVehicle.plate, newVehicle.brand, newVehicle.model, newVehicle.series, newVehicle.model_year, newVehicle.color]
            );
      
            return newVehicle;
          } catch (error) {
            console.error('Error creating the vehicle:', error);
            throw new Error("Error creating the vehicle");
          }
    }

    static async findAllVehicles() {
        const [rows] = await db.query("SELECT * FROM vehicle");
        return rows;
      }

    static async findVehicleByPlate(plate) {
        const [rows] = await db.query("SELECT * FROM vehicle WHERE plate = ?", [plate]);
        return rows[0];
    }

    static async verifyPlateExists(plate) {
        const [rows] = await db.query("SELECT * FROM vehicle WHERE plate = ?", [plate]);
        return rows.length > 0;
    }

      static async updateVehicle(plate, updatedData) {
        try {
            const [result] = await db.query(
              "UPDATE vehicle SET brand = ?, model = ?, series = ?, model_year = ?, color = ? WHERE plate = ?",
              [updatedData.brand, updatedData.model, updatedData.series, updatedData.model_year, updatedData.color, plate]
            );
      
            return {
              plate,
              ...updatedData
            };
          } catch (error) {
            console.error('Error updating the vehicle:', error);
            throw new Error("Error updating the vehicle");
          }
    }

    static async deleteVehicle(plate) {
        try {
            const [result] = await db.query("DELETE FROM vehicle WHERE plate = ?", [plate]);
            return {
              plate
            };
          } catch (error) {
            console.error('Error deleting the vehicle:', error);
            throw new Error("Error deleting the vehicle");
          }
    }
}