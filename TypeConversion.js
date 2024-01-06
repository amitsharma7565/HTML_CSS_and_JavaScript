let a= String(10);
console.log(a, typeof a)

let x
console.log(x, typeof x)
x=8;
console.log(x, typeof x)


x=x+"";
// this 8 is number and when add with string it automatically convert number to string, but i dont want this then use + sign on the start of the number
console.log(x, typeof x)
x=+x+2;
console.log(x, typeof x)
x=8-2
// in this time 8 is string not a number 
console.log(x, typeof x)

x=!x
console.log(x, typeof x)

x=Boolean(1);
console.log(x)



let y=parseInt("7565 Amit")
// this parseInt fetch only the interger value from the string 
console.log(y)
