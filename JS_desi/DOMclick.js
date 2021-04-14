function ajout() {
    var course = document.getElementById("course").value;
    var list = document.getElementById("listecommissions");
    var item = document.createElement("li");
    item.textContent = course;
    list.appendChild(item);
}