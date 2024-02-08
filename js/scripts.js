function openNav() {
    var x = document.getElementById("navigation");
    var threelineIcon = document.getElementById("threeline-icon");

    if (x.classList.contains("menujs")) {
        x.classList.remove("menujs");
        threelineIcon.innerHTML = "&#9776;"; // Altera para o ícone de três linhas
    } else {
        x.classList.add("menujs");
        threelineIcon.innerHTML = "&Cross;"; // Altera para o ícone de fechamento (X)
    }
}
