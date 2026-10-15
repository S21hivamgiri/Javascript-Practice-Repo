// Sub-classes representing variations of a product
class Car {
  constructor(options) {
    this.doors = options.doors || 4;
    this.color = options.color || "silver";
  }
}

class Truck {
  constructor(options) {
    this.wheels = options.wheels || 6;
    this.color = options.color || "black";
  }
}

// The Factory Class
class VehicleFactory {
  createVehicle(options) {
    if (options.vehicleType === "car") {
      return new Car(options);
    } else if (options.vehicleType === "truck") {
      return new Truck(options);
    }
    return null;
  }
}

// Client Usage
const factory = new VehicleFactory();

const myCar = factory.createVehicle({
  vehicleType: "car",
  color: "blue",
  doors: 2,
});

console.log(myCar instanceof Car); // true
console.log(myCar);

const myTruck = factory.createVehicle({
  vehicleType: "truck",
  color: "yellow",
  wheels: 16,
});
console.log(myTruck instanceof Car); // false
console.log(myTruck instanceof Truck); // true
console.log(myTruck); // "blue"
