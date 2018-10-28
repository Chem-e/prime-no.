
function primeNumbers(num) {
     //  let num = parseInt(document.querySelector("input").value);
     let start = parseInt(document.querySelector(".start").value);
     let stop = parseInt(document.querySelector(".stop").value);
     let printPrime=document.querySelector("#div");
   
 let i;
   for(i=start;i<=stop;i++){
       if(num%i===0){
           break;
       }
   }
  
   if(i===num){
    //   alert("prime no.");
    // return true;
   }
   else {
    //    alert("not a prime no.");
    // return false;
   }
    
}

// for( let i=2;i<=100;i++){
//     if(primeNumbers(i)){
//         console.log(i);
//     }
// }















//     let printPrime=document.querySelector("#div");
// for( let x=2;x<=100;x++){
//  let isPrime=true;
//  for(let y=2;y<x;y++){
//      if(x%y===0 && x!==y){
//          isPrime=false;
//      }
//  }
//  if (isPrime===true){
//     //  console.log(x);
    
//     printPrime.innerHTML+=`${x} <br>`;
//  }
// }


  

