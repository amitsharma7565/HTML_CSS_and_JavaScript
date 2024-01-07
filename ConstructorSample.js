function Alien(name,tech){
    this.name=name
    this.tech=tech

    this.work=function(){
        console.log("solving the bug form last 2 hours ")
    }
}


let alien1=new Alien("Amit","Java Full stack")
let alien2=new Alien("Sanjay","Backend")

console.log(alien2)

alien1.work()