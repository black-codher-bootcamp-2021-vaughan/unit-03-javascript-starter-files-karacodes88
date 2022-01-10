// ****************************************************TASK 1 - OBJECTS****************************************************

let personA = {
    name: 'kara', 
    likes: 'apples', 
    age: '20',
    location: 'birmingham'
};

console.log(personA);

console.log(personA.name)

const personB = {
    name: 'kawther',
    likes: 'mangoes',
    age: '25',
    location: 'tyseley'
};

console.log(personB);

console.log(personB.location)

let personC = {
    name: 'ayo',
    likes: 'berries',
    age: '19',
    location: 'harbone'
};

console.log(personC);

console.log(personC.age)

let personD = {
    name: 'lucy',
    likes: 'football',
    age: '23',
    location: 'newtown'
};

console.log(personD);

console.log(personD.likes)

function biography(person){
    return(
        " hello my name is " +
        person.name +
        ". I am " +
        person.age +
        " years old, I live in " +
        person.location +
        " and I like " +
        person.likes
    );
}

console.log(biography(personA));
console.log(biography(personB));
console.log(biography(personC));
console.log(biography(personD));

function whoIsOlder(personA, personB) {
    return (
        " who is Older " +
        personA.age +
        " age differences " +
        personA.age +
        " person.name is Older than person.name "+
        personA.age
    );
}


console.log(whoIsOlder(personA));

console.log(whoIsOlder(personB));









// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

const x = 4;
let y = 6;

const addition = x * y;

const multiply = x * y

console.log("multiply: x * y " + multiply);

const subtraction = x - y;

console.log("Subtraction: x - y " + subtraction);



console.log("multiplication: x * y " + multiply);

const division = x * y;

console.log("Division: x + y " + division);


















// ****************************************************TASK 3****************************************************

// const mentors = 35;
// const age = 17;
// const students = 16;

// const isAgeLimit =( mentors + students) < age;

// console.log('do students reach the age?' + isAgeLimit);

// homework 


function calculator (a,b,c) {
    switch (c) {
        case '+':
        return a + b;

        case '-':
        return a - b;
        
        case '/':
        return a / b;
        
        case '*':
        return a * b;
        
        default:
        return ('enter valid numbers');  
    }
}

let addNumbers = calculator(10,2, '+');
let subtractNumbers = calculator(10,2, '-');
let multiplyNumbers = calculator(10,2, '*');
let divideNumbers  = calculator(10,2, '/');

console.log (addNumbers);
console.log (subtractNumbers);
console.log (multiplyNumbers);
console.log (divideNumbers);










