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
            let onPage = this.onPage;
            switch (true) {
                case onPage <= 100:
                    console.log('You are in beetween 1 to 100')
                break;
                case onPage <= 200:
                    console.log('You are in beetween 101 to 200')
                break;
                case onPage <= 300:
                    console.log('You are in beetween 201 to 100')
                break;
                default:
                    console.log('You have read more than 300 pages')
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
    
    let HarryPotter = new Livre (150,'Harry Potter', 'J.K Rowling', 567, 50);
    
    console.log(HarryPotter); 
