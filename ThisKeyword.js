let laptop1={
    cpu:"i9",
    model:"2019"
}



let laptop2={
    cpu:"i11",
    model:"2020",

    compare:function(other){
        if(this.model>other.model){
            console.log(this)
        }
        else{
            console.log(other)
        }
    },
}



laptop2.compare(laptop1)