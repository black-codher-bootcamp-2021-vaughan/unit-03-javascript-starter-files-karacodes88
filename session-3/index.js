// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14

 let a = 5;
 const b = 10;
 let c = a + b;

 console.log(c);

 a = 20;

 console.log('after a has been updated' + c);
 
 c = a + b;

 console.log( 'after a has been updated with thhe new a value' + c);
 

 function sayHey() { console.log("hey!"); }

 sayHey();

 function  conversation() {

   
     sayHey();
     console.log("How are you?");
     console.log("Goodbye");
 }
//  
 conversation();

 function futureAge(name, age) {
     const ageInFiveYears= age + 5;
     return name + " will be " + ageInFiveYears + " in 5 years!"
 }

console.log(futureAge(" kara",20));

console.log(futureAge("kawther", 28));

