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

function average(scores) {
    let avg=(scores[0]+scores[1]+scores[2])/3
    return avg
}
var AvgOfDolphins=average(Dolphins1)
var AvgOfKoalas=average(Koalas1)

if(AvgOfDolphins>100 && AvgOfKoalas>100){
    console.log(`Match draw with Dolhin's Score ${AvgOfDolphins} and Koala's Score ${AvgOfKoalas}`);
}else if(AvgOfDolphins>AvgOfKoalas){
    console.log(`Dolphins Won 
    Dolhin's Score ${AvgOfDolphins} and Koala's Score ${AvgOfKoalas}
    `);
}else if(AvgOfDolphins<100 && AvgOfKoalas<100){
    console.log(`Match draw with Dolhin's Score ${AvgOfDolphins} and Koala's Score ${AvgOfKoalas}`);
}else if(AvgOfDolphins==AvgOfKoalas){
    console.log(`Match draw with Same Scores
     Dolhin's Score ${AvgOfDolphins} and Koala's Score ${AvgOfKoalas}`);
}else if(AvgOfDolphins<AvgOfKoalas){
    console.log(`Koalas Won
    Dolhin's Score ${AvgOfDolphins} and Koala's Score ${AvgOfKoalas}
    `);
}