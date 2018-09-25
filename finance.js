Vol1 = Number(prompt("Volume:"))
Share1 = Number(prompt("Price/Share:"))/100

TranCost = Vol1 * Share1
TotalC = TranCost
TotalV = Vol1

document.getElementById("vol1").innerHTML = `${Vol1}`
document.getElementById("share1").innerHTML = `${Share1}`
document.getElementById("tran1").innerHTML = `${TranCost.toFixed(0)}`
document.getElementById("total1").innerHTML = `${TotalC.toFixed(0)}`
document.getElementById("tvol1").innerHTML = `${TotalV.toFixed(0)}`


Vol2 = Number(prompt("Volume:"))
Share2 = Number(prompt("Price/Share:"))/100

TranCost2 = Vol2 * Share2
TotalC = TranCost + TranCost2
TotalV = Vol1 + Vol2
MAvg = ((Vol1 * Share1)+(Vol2 * Share2))/(Vol1 + Vol2)
PL = 100-(100*(MAvg/Share2))

document.getElementById("vol2").innerHTML = `${Vol2}`
document.getElementById("share2").innerHTML = `${Share2}`
document.getElementById("tran2").innerHTML = `${TranCost2.toFixed(0)}`
document.getElementById("total2").innerHTML = `${TotalC.toFixed(0)}`
document.getElementById("tvol2").innerHTML = `${TotalV.toFixed(0)}`
document.getElementById("mave2").innerHTML = `${MAvg.toFixed(4)}`
document.getElementById("profit2").innerHTML = `${PL.toFixed(7)}`


Vol3 = Number(prompt("Volume:"))
Share3 = Number(prompt("Price/Share:"))/100

TranCost3 = Vol3 * Share3
TotalC = TranCost + TranCost2 + TranCost3
TotalV = Vol1 + Vol2 + Vol3
MAvg = ((Vol1 * Share1)+(Vol2 * Share2)+(Vol3 * Share3))/(Vol1 + Vol2 + Vol3)
PL = 100-(100*(MAvg/Share3))

document.getElementById("vol3").innerHTML = `${Vol3}`
document.getElementById("share3").innerHTML = `${Share3}`
document.getElementById("tran3").innerHTML = `${TranCost3.toFixed(0)}`
document.getElementById("total3").innerHTML = `${TotalC.toFixed(0)}`
document.getElementById("tvol3").innerHTML = `${TotalV.toFixed(0)}`
document.getElementById("mave3").innerHTML = `${MAvg.toFixed(4)}`
document.getElementById("profit3").innerHTML = `${PL.toFixed(7)}`


Vol4 = Number(prompt("Volume:"))
Share4 = Number(prompt("Price/Share:"))/100

TranCost4 = Vol4 * Share4
TotalC = TranCost + TranCost2 + TranCost3 + TranCost4
TotalV = Vol1 + Vol2 + Vol3 + Vol4
MAvg = ((Vol1 * Share1)+(Vol2 * Share2)+(Vol3 * Share3)+(Vol4 * Share4))/(Vol1 + Vol2 + Vol3 + Vol4)
PL = 100-(100*(MAvg/Share4))

document.getElementById("vol4").innerHTML = `${Vol4}`
document.getElementById("share4").innerHTML = `${Share4}`
document.getElementById("tran4").innerHTML = `${TranCost4.toFixed(0)}`
document.getElementById("total4").innerHTML = `${TotalC.toFixed(0)}`
document.getElementById("tvol4").innerHTML = `${TotalV.toFixed(0)}`
document.getElementById("mave4").innerHTML = `${MAvg.toFixed(4)}`
document.getElementById("profit4").innerHTML = `${PL.toFixed(7)}`


Vol5 = Number(prompt("Volume:"))
Share5 = Number(prompt("Price/Share:"))/100

TranCost5 = Vol5 * Share5
TotalC = TranCost + TranCost2 + TranCost3 + TranCost4 + TranCost5
TotalV = Vol1 + Vol2 + Vol3 + Vol4 + Vol5
MAvg = ((Vol1 * Share1)+(Vol2 * Share2)+(Vol3 * Share3)+(Vol4 * Share4)+(Vol5 * Share5))/(Vol1 + Vol2 + Vol3 + Vol4 + Vol5)
PL = 100-(100*(MAvg/Share5))

document.getElementById("vol5").innerHTML = `${Vol5}`
document.getElementById("share5").innerHTML = `${Share5}`
document.getElementById("tran5").innerHTML = `${TranCost5.toFixed(0)}`
document.getElementById("total5").innerHTML = `${TotalC.toFixed(0)}`
document.getElementById("tvol5").innerHTML = `${TotalV.toFixed(0)}`
document.getElementById("mave5").innerHTML = `${MAvg.toFixed(4)}`
document.getElementById("profit5").innerHTML = `${PL.toFixed(7)}`


Vol6 = Number(prompt("Volume:"))
Share6 = Number(prompt("Price/Share:"))/100

TranCost6 = Vol6 * Share6
TotalC = TranCost + TranCost2 + TranCost3 + TranCost4 + TranCost5 + TranCost6
TotalV = Vol1 + Vol2 + Vol3 + Vol4 + Vol5 + Vol6
MAvg = ((Vol1 * Share1)+(Vol2 * Share2)+(Vol3 * Share3)+(Vol4 * Share4)+(Vol5 * Share5)+(Vol6 * Share6))/(Vol1 + Vol2 + Vol3 + Vol4 + Vol5 + Vol6)
PL = 100-(100*(MAvg/Share6))

document.getElementById("vol6").innerHTML = `${Vol6}`
document.getElementById("share6").innerHTML = `${Share6}`
document.getElementById("tran6").innerHTML = `${TranCost6.toFixed(0)}`
document.getElementById("total6").innerHTML = `${TotalC.toFixed(0)}`
document.getElementById("tvol6").innerHTML = `${TotalV.toFixed(0)}`
document.getElementById("mave6").innerHTML = `${MAvg.toFixed(4)}`
document.getElementById("profit6").innerHTML = `${PL.toFixed(7)}`
