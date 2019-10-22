// Nested object and array destructuring
const manager = {
   id: 1,
   name: 'Hari',
   reportees: [
      { id: 10, name: 'Krish' },
      { id: 11, name: 'Amogh' },
      { id: 12, name: 'Shiv' }
   ]
}

const {
   name: managerName,
   reportees: [
      { name: reporteeName1 },
      { name: reporteeName2 },
   ]
} = manager;

console.log(managerName);
console.log(reporteeName1);
console.log(reporteeName2);
