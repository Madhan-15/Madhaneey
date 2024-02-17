const prompt=require('prompt-sync')({sigint:true})
var Dolphins1=[]
var Koalas1=[]
console.log("Enter Round 1 Score");

for(var i=0;i<3;i++){
    Dolphins1[i]=parseInt(prompt(`Dolphin Score ${i}..`))
}
for(var i=0;i<3;i++){
    Koalas1[i]=parseInt(prompt(`Koalas Score ${i}..`))
}

var average=(scores)=> {
    let avg=(scores[0]+scores[1]+scores[2])/3
    return avg
}
var AvgOfDolphins=average(Dolphins1)
var AvgOfKoalas=average(Koalas1)

function checkWinner(AvgOfDolphin,AvgOfKoalas){
    if(AvgOfDolphin>(AvgOfKoalas*2)){
        console.log(`Dolphins Team won with Average of ${AvgOfDolphin}`);
    }else if(AvgOfKoalas>(AvgOfDolphin*2)){
        console.log(`Koalas Team won with Average of ${AvgOfKoalas}`);
    }else{
        console.log("Draw");
    }
}
checkWinner(AvgOfDolphins,AvgOfKoalas)