let nomeHeroi = "DomJuan"
let nivelXp = 10001
let categoriaHeroi = ""

if(nivelXp <1000){
    categoriaHeroi = "Ferro"
}
else if(nivelXp>1000 && nivelXp<=2000){
    categoriaHeroi= "Bronze"
}
else if(nivelXp>= 2001 && nivelXp<=5000){
    categoriaHeroi = "Prata"
}
else if(nivelXp>= 6001 && nivelXp<=7000){
    categoriaHeroi = "Ouro"
}
else if(nivelXp>= 7001 && nivelXp<=8000){
    categoriaHeroi = "Platina"
}
else if(nivelXp>= 8001 && nivelXp<=9000){
    categoriaHeroi = "Ascendente"
}
else if(nivelXp>= 9001 && nivelXp<=10000){
    categoriaHeroi = "Imortal"
}
else if(nivelXp>= 10001){
    categoriaHeroi = "Radiante"
}

console.log("O heroi de nome "+nomeHeroi + " está na categoria "+ categoriaHeroi)