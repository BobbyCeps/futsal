var r_e1_m1 = document.getElementById("resultat_equipe1_match1").value;
var r_ea_m1 = document.getElementById("resultat_equipeA_match1").value;

function colorWin() {
 if (r_e1_m1 < r_ea_m1){
   r_ea_m1.style.backgroundColor='green';
 }
}
