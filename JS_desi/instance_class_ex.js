class Document {
    constructor(numReg, title) {
    this.numReg = numReg;
    this.title = title;
    }
}
class Livre extends Document {
    constructor(numReg, title, auteur, nbrPages){
        super(numReg, title);
        this.auteur = auteur;
        this.nbrPages = nbrPages
    }
}
class Revue extends Livre {
    constructor(numReg, title, auteur, nbrPages, mois, annee){
        super(numReg, title, auteur, nbrPages);
        this.mois = mois;
        this.annee = annee
    }
}
class Dictionnaire extends Revue {
    constructor(numReg, title, auteur, nbrPages, mois, annee, langue){
        super(numReg, title, auteur, nbrPages, mois, annee);
        this.langue = langue;
    }
}
var Book = new Dictionnaire(10, "Autour du monde", "Jules Verne", 500, 3, 1890, "Française");
console.log(Book)
