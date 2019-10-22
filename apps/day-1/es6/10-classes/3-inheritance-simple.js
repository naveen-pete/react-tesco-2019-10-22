// Simple inheritance

// Base class
class Animal {
   constructor(name) {
      this.name = name;
   }

   move(distanceInMeters = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
   }
}

// Derived class
class Dog extends Animal {
   bark() {
      console.log('Woof! Woof!');
   }
}

const dog = new Dog('Cooper');
dog.bark();    // Woof! Woof!
dog.move(10);  // Cooper moved 10m.
