var Noms=[];

function tirage() {
    let index = Math.floor(Math.random(Noms) * (Noms.length)); //math.random from 0 and 1, math.floor = rounded number
    let m=Noms[index];
    console.log("Client tiré au sort " + m);
    return m
}

function add_nom() {
    var nom=prompt("saisir un nom");
    Noms.push(nom);
}


console.log(Math.floor(2.6));