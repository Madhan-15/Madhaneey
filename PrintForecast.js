const Temperatures1=[17,21,23]
const Temperatures2=[12,5,-5,0,4]

function printForecast(Temps){
    for(var i=0;i<Temps.length;i++){
        console.log(`${Temps[i]}°C in Day ${i+1}`);
    }
}
console.log("1st Month");
printForecast(Temperatures1)
console.log("2nd Month")
printForecast(Temperatures2)