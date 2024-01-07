
function greet(u){
    let check="check me outside"
    console.log(check)
    // it print the user value beacuse user is global variable
    return `value is ${user} !!`
}

let user="Amit"
// it gives you error because check is local variable 
// console.log(check)
let result=greet(user)

console.log(result)



// if i am not pass the value in the check then num3 it will take default value as 1 
function check(num1, num2,num3=1){
console.log(num1,num2,num3)
return num1+num2+num3
}

let result1=check(5,4,10)

console.log(result1)