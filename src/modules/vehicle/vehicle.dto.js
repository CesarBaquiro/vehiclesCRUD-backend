class VehicleDTO {
    constructor(plate, brand, model, series, model_year, color) {
        this.plate = plate;
        this.brand = brand;
        this.model = model;
        this.series = series;
        this.model_year = model_year;
        this.color = color;
    }
  
    // Asserting that the required fields are present
    validate() {
      if (!this.plate) throw new Error("The 'plate' is required");
      if (!this.brand) throw new Error("The 'brand' field is required");
      if (!this.model_year) throw new Error("The 'model_year' field is required");
    }
  }
  
  export default VehicleDTO;
  