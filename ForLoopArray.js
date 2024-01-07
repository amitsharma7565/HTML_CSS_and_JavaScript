let num=[];

num[0]=5;
num[99]=9;

console.log(num.length)


//for of loop

// for(let n of num){
//     console.log(n)
// }

// for in loop 
for(let n in num){
    console.log(num[n])
}