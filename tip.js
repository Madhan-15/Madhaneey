// const prompt = require('prompt-sync')({ sigint: true });
var Bills = [125,555,44]
var tips=[]
var Total=[]
function tipCalc(Bill){
    let tip
    (Bill > 50 && Bill < 300)?tip=Bill*0.15:tip=Bill*0.2
    return tip
}
for(var i=0;i<Bills.length;i++){
    tips[i]=tipCalc(Bills[i])
}
function calcTotal(tips,Bills){
    for(var i=0;i<tips.length;i++){
        Total.push(tips[i]+Bills[i])
    }
}
console.log("Actual Bills..."+Bills);
calcTotal(tips,Bills)
console.log("Tips for the Bills "+tips);
console.log("Totals for the Bills "+Total);