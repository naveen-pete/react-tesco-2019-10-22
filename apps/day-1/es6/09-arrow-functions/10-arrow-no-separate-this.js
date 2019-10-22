// Arrow function syntax
// An arrow function does not have its own ‘this’
let team = {
   players: ['Dhoni', 'Virat', 'Rohit', 'Dhawan'],
   country: 'India',
   display: function () {
      this.players.forEach(player => {
         console.log(`${player} plays for ${this.country}`);
      });
   }
};

team.display();
