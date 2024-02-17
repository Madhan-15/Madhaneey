const prompt = require('prompt-sync')({ sigint: true });

var Bill = parseInt(prompt("Actual Bill..."));

function tipCalc(Bill){
    let tip
    (Bill > 50 && Bill < 300)?tip=Bill*0.15:tip=Bill*0.2
    return tip
}

var Total=parseFloat(tipCalc(Bill))+Bill

console.log("Total Bill..."+Total);