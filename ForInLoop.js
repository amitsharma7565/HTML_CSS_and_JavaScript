let alein={
    name:"Amit",
    place:"Himachal",
    laptop:{
        cpu:"i7",
        model:"Asus"
    }
}


for(let i in alein){
    // console.log(i,alein[i]);
}

// print only laptop property 
for(let j in alein.laptop){
    console.log(j,alein.laptop[j])
}