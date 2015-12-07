/*Fonction pour renseigner le titre de l'équipe*/
function addTitre(eq) { // valeur donné par appel sur le html
    var titre = prompt("Entrez le nom de l'équipe " + eq + ":");
    localStorage.setItem("titre_eq" + eq, titre);


    elems = document.getElementsByName("titre_eq" + eq);
    for (i = 0; i < elems.length; i++) {
        elems[i].innerHTML = localStorage.getItem("titre_eq" +eq );
    }
}

function loadtitre() {
  for (eq = 1; eq <= 6; eq++) {
      elems = document.getElementsByName("titre_eq" + eq);
      for (i = 0; i < elems.length; i++) {
          elems[i].innerHTML = localStorage.getItem("titre_eq" +eq );
      }
  }
}
