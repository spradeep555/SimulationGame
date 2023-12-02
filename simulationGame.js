
function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed || 0;
    this.fuelType = fuelType || 'Unknown';
  }
  
  
  Vehicle.prototype.accelerate = function(increment) {
    this.speed += increment || 10;
    console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} km/h`);
  };
  
  Vehicle.prototype.brake = function(decrement) {
    this.speed -= decrement || 10;
    console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed} km/h`);
  };
  
  Vehicle.prototype.refuel = function() {
    console.log(`${this.brand} ${this.model} is refueling.`);
  };
  
  
  function Car(brand, model, speed, fuelType, numberOfWheels) {

    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels || 4;
  }
  

  Car.prototype = Object.create(Vehicle.prototype);
  

  Car.prototype.honk = function() {
    console.log(`${this.brand} ${this.model} is honking!`);
  };
  
  function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
  
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines || 2;
    this.hasLandingGear = hasLandingGear || true;
  }
  

  Airplane.prototype = Object.create(Vehicle.prototype);
  

  Airplane.prototype.takeOff = function() {
    console.log(`${this.brand} ${this.model} is taking off!`);
  };

  const myCar = new Car('Toyota', 'Camry', 60, 'Petrol', 4);
  myCar.accelerate();
  myCar.brake();
  myCar.honk();
  
  const myAirplane = new Airplane('Boeing', '747', 500, 'Jet', 4, true);
  myAirplane.accelerate(200);
  myAirplane.takeOff();
  myAirplane.refuel();
  