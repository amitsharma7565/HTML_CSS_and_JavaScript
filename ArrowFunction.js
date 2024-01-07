let greet = (user)=>{
    return `hi this is ${user}`
}


console.log(greet("Amit"))


// make in one line dont need to add this bracket {}
let add= (num1,num2)=> num1+num2;


console.log(add(10,20))




// add the value if it is postive ..if it negtive dont add

let check =(num1,num2)=>{
    if(num1>=0&&num2>=0){
        return num1+num2;
    }
    else{
        return "dont enter negtive value "
    }
}


let result= check(10,-5)

console.log(result)



