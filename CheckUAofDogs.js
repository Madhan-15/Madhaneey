function checkDogs(juliaData,kateData){
    for(let i=0;i<juliaData.length;i++){
        if(i==0||i==juliaData.length) juliaData.pop(i)
    }
    let TotalData=juliaData.concat(kateData)
    for(let i=0;i<TotalData.length;i++){
        if(TotalData[i]<3) console.log(`Dog number ${i} is still a Puppy\n`)
        else console.log(`Dog number ${i} is an adult and is ${TotalData[i]} years old\n`)
    }
}
var JuliaData= [3, 5, 2, 12, 7]
var KateData=[4, 1, 15, 8, 3]
console.log("Case 1\n")
checkDogs(JuliaData,KateData)

JuliaData= [9, 16, 6, 8, 3]
KateData=[10, 5, 6, 1, 4]
console.log("Case 2\n")
checkDogs(JuliaData,KateData)