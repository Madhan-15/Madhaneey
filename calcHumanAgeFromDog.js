function calcAverageHumanAge(DogAges){
    let humanAge=[]
    for(let i=0;i<DogAges.length;i++){
        if(DogAges[i]<3) humanAge[i]=2*DogAges[i]
        else humanAge[i]=16+DogAges[i]*4

        if(humanAge[i]<18) DogAges.pop(i) 
    }
    let Average=0
    for(let j=0;j<humanAge.length;j++){
        Average+=humanAge[j]
    }
    console.log(`Average of Adult Human Age...${(Average/humanAge.length)}`)
}

var DogAge1= [5, 2, 4, 1, 15, 8, 3]
console.log("Case 1\n")
calcAverageHumanAge(DogAge1)
var DogAge2=[16, 6, 10, 5, 6, 1, 4]
console.log("\nCase 2\n")
calcAverageHumanAge(DogAge2)