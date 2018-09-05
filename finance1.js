let Vol = []
let message = "Financial Information\nPlease enter SIX volumes: "
let Share = []
let message1 = "Financial Information\nPlease enter SIX prices: "
//let r= Math.floor((Math.random() * 10) + 1);

console.log("")
console.log("Financial Information - Stocks")
console.log("------------------------------")
console.log("")

for (let v = 0; v < 6; v++){
   Vol[v] = prompt(`${message} ${v + 1}: `)
   console.log(`Volume: ${Vol[v]}`)
}
for (let s = 0; s < 6; s++){
    Share[s] = prompt(`${message1} ${s + 1}: `)
    console.log(`Price/Share: ${Share[s]}`)
}
TranCost = Vol[0] * Share[0]
TranCost1 = Vol[1] * Share[1]
TranCost2 = Vol[2] * Share[2]
TranCost3 = Vol[3] * Share[3]
TranCost4 = Vol[4] * Share[4]
TranCost5 = Vol[5] * Share[5]





/*TotalC = TranCost + TranCost2
TotalV = Vol1 + Vol2
MAvg = ((Vol1 * Share1)+(Vol2 * Share2))/(Vol1 + Vol2)
PL = 100-(100*(MAvg/Share2))*/


console.log(`Volume: ${Vol[0]}`)
console.log(`Price/Share: ${Share[0]}`)
console.log(`Transaction Cost: ${TranCost}\n${TranCost1}\n${TranCost2}\n${TranCost3}\n${TranCost4}\n${TranCost5}`)




