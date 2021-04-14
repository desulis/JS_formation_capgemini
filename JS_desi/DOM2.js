function ajoute() {
    document.getElementById('zone').style.color = randomColors();
  }
  
function randomColors() {
return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
function supprime() {
    document.querySelector('#zone');
}