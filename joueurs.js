function addPlayer(num) {
    for (var i = 0; i < 5; i++) {
        var nomJoueur = prompt("Entrez le nom de joueurs : ")
        document.getElementById("ul_team_" + num).innerHTML += "<li id=\"li-" + i + "\">" + nomJoueur + "</li>";
    }
}
