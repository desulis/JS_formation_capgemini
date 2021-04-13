/* function div (a, b) {
    try {
    return a/b;
  } catch (e) {
    console.log("zero not acceptable" + e);
    }
  }
  
  
  
  console.log(div(4,0)) */

  function Document (numReg, title){
    this.numReg = numReg;
    this.title = title;
    }
    
    function Livre(numReg, title, autor, numPage){
        Document.call(this, numReg, title)
        this.autor = autor;
        this.numPage = numPage;
        this.onPage = function onPage(){
            let page = this.numPage;
            switch (numPage) {
                case page <= 100;
                display('You are in beetween 1 to 100')
                break;
                case page <= 200;
                display('You are in beetween 1 to 200')
                break;
                case page <= 300;
                display('You are in beetween 1 to 100')
                break;
            }
        }
    }
    function Revue(numReg, title, mois, annee){
        Document.call(this, numReg, title)
    this.mois = mois;
    this.annee = annee;
    }
    
    function Dictionnaire(numReg, title, langue){
        Document.call(this, numReg, title)
        this.langue = langue;
    }
    
    Livre.prototype = Object.create(Document.prototype);
    Revue.prototype = Object.create(Document.prototype);
    Dictionnaire.prototype = Object.create(Document.prototype);
    
    let HarryPotter = new Livre (150,'Harry Potter', 'J.K Rowling', 567);
    
    console.log(HarryPotter);
    
