const prompt = require('prompt-sync')();

const numberValidAndInput = ()=>{
let n = prompt("Enter A Number: ");  
if(isNaN(n)){
   console.log("Not Valid Input");   
   return 0; 
} 
return n;
}

// * print number 1 to N
const numberPrintNTimes = ()=>{
  const n = numberValidAndInput()
  for(let i=1;i<=n;i++)
       console.log(i);
}
//! numberPrintNTimes()


//* print number n to 1 
const numberPrintNTimesReverse = ()=>{
  let n = numberValidAndInput()
  for(let i=1;i<=n;i++)
      console.log(n-i+1);

}
// numberPrintNTimesReverse()


const evenNumberNTimes = ()=>{
  let n = numberValidAndInput()
  for(let i=1;i<=n;i++)
       if(i%2===0)
           console.log(i);
  
//   for(let i=1;i<=n;i++)
//       if(i%2)
//          console.log(i+1)

//   for(let i=1;i<=n/2;i++)
//      console.log(i*2);
}
// evenNumberNTimes();

const sumOfNNaturalNumber = ()=>{
  let n = numberValidAndInput();
  let total = 0;
  for(let i=1;i<=n;i++)
        total+=i;
  console.log(total);       
}

const factorials = ()=>{
  let n = numberValidAndInput();   
  let fact = 1;  
    for(let i=1;i<=n;i++)
         fact *= i;
 console.log(fact)       
}
// factorials()



const sumOfNNaturalEvenNumber = ()=>{
  let n = numberValidAndInput();   
  const sum = (n/2)*(n/2+1)
  console.log(sum)
} 

sumOfNNaturalEvenNumber()


// Print all numbers divisible by 3 and 5 up to N
const divisibleByThreeAndFive=()=>{
  let n = numberValidAndInput();   
   for(let i=1;i<=n;i++)
       if(i%3===0 && i%5===0)
            console.log(i)
}
// divisibleByThreeAndFive()

//! n*((n*2)+2)/2  first n even numbers


// timeStart and timeEnd  --> how much time taken by program 


// Find the sum of all odd numbers up to N
const oddNumberSum = ()=>{
  let n = numberValidAndInput();   
  console.log((n/2)*(n/2))         
}
oddNumberSum()
// Print the cubes of numbers from 1 to N
const cubesNTimes = ()=>{
  let n = numberValidAndInput();   
    for(let i=0;i<=n;i++)
         console.log(Math.pow(i,3))    
}
// cubesNTimes()

// Print only the numbers that are both even and perfect squares

const evenAndPerfectSquares = ()=>{
  let n = numberValidAndInput();   
  for(let i=1;i<=n;i++){
    const square = i*i;
      if(i%2==0 && square/i===i){
          if(square <= n)
            console.log(square)
          else
            break; 
    }
  } 
}
// evenAndPerfectSquares()