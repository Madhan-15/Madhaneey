// Constructor function for Car
function Car(make, speed) {
    this.make = make;
    this.speed = speed;

    // Method to display information about the car
    this.displayInfo = function () {
        console.log(`Car: ${this.make}, Speed: ${this.speed} km/h`);
    };
}

// Creating instances of Car
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

// Displaying information about the cars
car1.displayInfo();
car2.displayInfo();