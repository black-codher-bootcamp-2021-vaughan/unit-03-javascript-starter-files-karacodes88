// ****************************************************TASK 1****************************************************

const animals = [ 'turtle', 'fish', 'dolphin', 'whale', 'leopard', 'elephant' ];


console.log(animals);
 
// animals.pop();
console.log (animals);

animals.sort();
 animals.reverse();
console.log(animals);












// ****************************************************TASK 2****************************************************





const names = [ 'kara', 'kawther', 'ayobami', 'annie', 'sam', 'becky', 'beyonce', 'naz', 'adele', 'rihanna','ciara'];

names.sort();

console.log (names);

names.reverse();

console.log(names);

// bonus

// const points = [5, 325, 67, 100000, 150];
// points.sort(function(a,b){return a - b });

// console.log (points);

const points  = [5, 325, 67, 100000, 150];
points.sort(function(a, b){return b - a});

console.log (points);








// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
// Note: this helper function is using a tertiary operator instead of an if/else statement
function compare(a, b) {
  const personA = a.age;
  const personB = b.age;

  return personA > personB ? true : false;
}
