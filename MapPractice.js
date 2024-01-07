let map = new Map();

map.set("Name","Amit")
map.set("Surname","Sharma")

// console.log(map.keys())
// console.log(map.has("name"))
// console.log(map.get("Name"))
map.set("Surname","Negi")


// for(let [k,v] of map){
//     console.log(k,":",v)
// }

map.forEach((v,k)=>{
    console.log(k+":"+v)
})