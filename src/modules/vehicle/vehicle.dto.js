class VehicleDTO {
    constructor(plate, brand, model, series, color) {
        this.plate = plate;
        this.brand = brand;
        this.model = model;
        this.series = series;
        this.color = color;
    }
  
    // Asserting that the required fields are present
    validate() {
      if (!this.plate) throw new Error("The 'plate' is required");
      if (!this.brand) throw new Error("The 'brand' field is required");
      if (!this.series) throw new Error("The 'series' field is required");
    }
  }
  
  export default VehicleDTO;
  