// Static method
class Circle {
   static calculateArea(radius) {
      return Circle.PI * radius * radius;
   }
}

// Static property
Circle.PI = 3.14;

// Accessing static members
console.log('PI:', Circle.PI); 	// PI: 3.14
console.log('Area of circle:', Circle.calculateArea(5));
                                 // Area of circle: 78.5
