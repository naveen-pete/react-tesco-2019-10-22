// Unpacking fields from objects passed as function parameter
function userId({ id }) {
   return id;
}

function whois({ displayName, fullName: { firstName: name } }) {
   console.log(displayName + ' is ' + name);
}

var user = {
   id: 100,
   displayName: 'kris',
   fullName: {
      firstName: 'Krishna',
      lastName: 'Kumar'
   }
};

console.log('userId: ' + userId(user)); // "userId: 100"
whois(user); // "kris is Krishna"
