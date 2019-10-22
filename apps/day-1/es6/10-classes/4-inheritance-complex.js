// Complex inheritance

// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

// Derived class
class Dog extends Animal {
  constructor(name, color = 'white') {
    super(name);	// call to superclass constructor
    this.color = color;
  }

  speak() {
    console.log(this.name + ' barks.');
  }

  describe() {	// subclass method
    console.log(`${this.name} is ${this.color} in color.`);
  }
}

// Derived class
class Lion extends Animal {
  speak() {
    super.speak();		// call to superclass method
    console.log(this.name + ' roars.');
  }
}

const a = new Animal('Tommy');
a.speak();     // Tommy makes a noise.

const d = new Dog('Snowy');
d.speak();     // Snowy barks.
d.describe();  // Snowy is white in color.

const l = new Lion('Leo');
l.speak();     // Leo makes a noise.
               // Leo roars.