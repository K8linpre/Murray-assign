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
TranCost = Vol * Share
console.log(`Volume: ${Vol}`)
console.log(`Price/Share: ${Share}`)


