let nums=[1,2,3,4,5,6];


let result= nums.filter(n=> n%2===0)
.map(n=>n*2)
.reduce((a,b)=>a+b)
// .forEach((n)=>{
//     console.log(n*2)
// });
console.log(result)