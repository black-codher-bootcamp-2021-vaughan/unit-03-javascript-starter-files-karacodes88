    function getGrade (total){
      if (total >=90) {
   console.log('Well done, your grade is A+')
    
      } else if (total >=80 && total < 90){
   console.log ('')
      } else if (total >= 70 && total <80){
   console.log (' grade B ')
      }else if (total >= 60 && total <70){
   console.log (' grade C ') 
      }else if (total >=50 && total <60){
   console.log ('grade D')      
      }
   }
      
   getGrade(95)
   getGrade(75)
   getGrade(50)
   getGrade(65)

// task 2

function getGrade (total) {
   
   switch (true) {
      case total >= 90:
         return 'A+';
         break
      case total >=80 && total <= 90:
         return 'A';
         break
      case total >= 70 && total <= 80:
         return 'B';
      case total >= 60 && total <= 70:
         return 'C';
         break
      case total >= 50 && total <= 60:
         return 'D';
         break
      default:
         return "fail";     
   }
}

console.log(getGrade(90))
console.log(getGrade(84))
console.log(getGrade(63))
console.log(getGrade(55))
console.log(getGrade(77))

   


    


