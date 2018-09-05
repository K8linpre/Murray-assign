console.log("")
console.log("Financial Information - Stocks")
console.log("------------------------------")
console.log("")

Vol1 = Number(prompt("Volume:"))
Share1 = Number(prompt("Price/Share:"))/100

TranCost = Vol1 * Share1
TotalC = TranCost
TotalV = Vol1

console.log(`Volume: ${Vol1}`)
console.log(`Price/Share: ${Share1}`)
console.log(`Transaction Cost: ${TranCost.toFixed(0)}`)
console.log(`Total Cost: ${TotalC.toFixed(0)}`)
console.log(`Total Volume: ${TotalV.toFixed(0)}`)
console.log("")

Vol2 = Number(prompt("Volume:"))
Share2 = Number(prompt("Price/Share:"))/100

TranCost2 = Vol2 * Share2
TotalC = TranCost + TranCost2
TotalV = Vol1 + Vol2
MAvg = ((Vol1 * Share1)+(Vol2 * Share2))/(Vol1 + Vol2)
PL = 100-(100*(MAvg/Share2))

console.log(`Volume: ${Vol2}`)
console.log(`Price/Share: ${Share2}`)
console.log(`Transaction Cost: ${TranCost2.toFixed(0)}`)
console.log(`Total Cost: ${TotalC.toFixed(0)}`)
console.log(`Total Volume: ${TotalV.toFixed(0)}`)
console.log(`Moving Average: ${MAvg.toFixed(4)}`)
console.log(`Profit/Loss: ${PL.toFixed(7)}%`)
console.log("")

Vol3 = Number(prompt("Volume:"))
Share3 = Number(prompt("Price/Share:"))/100

TranCost3 = Vol3 * Share3
TotalC = TranCost + TranCost2 + TranCost3
TotalV = Vol1 + Vol2 + Vol3
MAvg = ((Vol1 * Share1)+(Vol2 * Share2)+(Vol3 * Share3))/(Vol1 + Vol2 + Vol3)
PL = 100-(100*(MAvg/Share3))

console.log(`Volume: ${Vol3}`)
console.log(`Price/Share: ${Share3}`)
console.log(`Transaction Cost: ${TranCost3.toFixed(0)}`)
console.log(`Total Cost: ${TotalC.toFixed(0)}`)
console.log(`Total Volume: ${TotalV.toFixed(0)}`)
console.log(`Moving Average: ${MAvg.toFixed(4)}`)
console.log(`Profit/Loss: ${PL.toFixed(7)}%`)
console.log("")

Vol4 = Number(prompt("Volume:"))
Share4 = Number(prompt("Price/Share:"))/100

TranCost4 = Vol4 * Share4
TotalC = TranCost + TranCost2 + TranCost3 + TranCost4
TotalV = Vol1 + Vol2 + Vol3 + Vol4
MAvg = ((Vol1 * Share1)+(Vol2 * Share2)+(Vol3 * Share3)+(Vol4 * Share4))/(Vol1 + Vol2 + Vol3 + Vol4)
PL = 100-(100*(MAvg/Share4))

console.log(`Volume: ${Vol4}`)
console.log(`Price/Share: ${Share4}`)
console.log(`Transaction Cost: ${TranCost4.toFixed(0)}`)
console.log(`Total Cost: ${TotalC.toFixed(0)}`)
console.log(`Total Volume: ${TotalV.toFixed(0)}`)
console.log(`Moving Average: ${MAvg.toFixed(4)}`)
console.log(`Profit/Loss: ${PL.toFixed(7)}%`)
console.log("")

Vol5 = Number(prompt("Volume:"))
Share5 = Number(prompt("Price/Share:"))/100

TranCost5 = Vol5 * Share5
TotalC = TranCost + TranCost2 + TranCost3 + TranCost4 + TranCost5
TotalV = Vol1 + Vol2 + Vol3 + Vol4 + Vol5
MAvg = ((Vol1 * Share1)+(Vol2 * Share2)+(Vol3 * Share3)+(Vol4 * Share4)+(Vol5 * Share5))/(Vol1 + Vol2 + Vol3 + Vol4 + Vol5)
PL = 100-(100*(MAvg/Share5))

console.log(`Volume: ${Vol5}`)
console.log(`Price/Share: ${Share5}`)
console.log(`Transaction Cost: ${TranCost5.toFixed(0)}`)
console.log(`Total Cost: ${TotalC.toFixed(0)}`)
console.log(`Total Volume: ${TotalV.toFixed(0)}`)
console.log(`Moving Average: ${MAvg.toFixed(4)}`)
console.log(`Profit/Loss: ${PL.toFixed(7)}%`)
console.log("")

Vol6 = Number(prompt("Volume:"))
Share6 = Number(prompt("Price/Share:"))/100

TranCost6 = Vol6 * Share6
TotalC = TranCost + TranCost2 + TranCost3 + TranCost4 + TranCost5 + TranCost6
TotalV = Vol1 + Vol2 + Vol3 + Vol4 + Vol5 + Vol6
MAvg = ((Vol1 * Share1)+(Vol2 * Share2)+(Vol3 * Share3)+(Vol4 * Share4)+(Vol5 * Share5)+(Vol6 * Share6))/(Vol1 + Vol2 + Vol3 + Vol4 + Vol5 + Vol6)
PL = 100-(100*(MAvg/Share6))

console.log(`Volume: ${Vol6}`)
console.log(`Price/Share: ${Share6}`)
console.log(`Transaction Cost: ${TranCost6.toFixed(0)}`)
console.log(`Total Cost: ${TotalC.toFixed(0)}`)
console.log(`Total Volume: ${TotalV.toFixed(0)}`)
console.log(`Moving Average: ${MAvg.toFixed(4)}`)
console.log(`Profit/Loss: ${PL.toFixed(7)}%`)
console.log("")