let alien1={
    name:"Amit",
    place:"Himachal",
    brand:"Adidas",
    laptop:{
        brand1:"Acer",
        model:2013
    }
}
// i put the question mark if that field exits it print otherwise not give the error if i put ?

console.log(alien1?.laptop?.brand1?.length)
console.log(alien1)

// delete the object 
delete alien1.name

console.log(alien1)