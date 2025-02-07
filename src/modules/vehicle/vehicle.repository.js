import db from "../../../db.js";

export default class UserRepository {
    static async findAllVehicles() {
        const [rows] = await db.query("SELECT * FROM vehicle");
        return rows;
      }

      static async updateVehicle(plate, updatedData) {
        try {
            const [result] = await db.query(
              "UPDATE vehicle SET brand = ?, model = ?, series = ?, color = ? WHERE plate = ?",
              [updatedData.brand, updatedData.model, updatedData.series, updatedData.color, plate]
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
}