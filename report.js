

////   fonction scoreEquip(foo,bar,foo1,bar1) { }
//// result_foo_bar  :  resultat match foo euipe bar
//////  score_foo_eq_bar : score equipe foo match bar

///function scorePool_1() {
 //// Recupere 6 resultats des 3 matchs
 var result1 = document.getElementById('result1_1').value;
 var result2 = document.getElementById('result1_2').value;

///
////Appel fct calculResultat()
//}

function scoreEquip() {
  var result1 = document.getElementById('result1_1').value;
  var result2 = document.getElementById('result1_2').value;


  if (result1 == result2) {
   document.getElementById("score1_eq1").innerHTML = 1;
   document.getElementById("score1_eq2").innerHTML = 1;

  } else if (((result1 - result2)>3)||((result2 - result1)>3)) {
    if (result1 > result2) {
  document.getElementById("score1_eq1").innerHTML = 4;
  document.getElementById("score1_eq2").innerHTML = 0;
} else {
  document.getElementById("score1_eq1").innerHTML = 0;
  document.getElementById("score1_eq2").innerHTML = 4;
}
  } else if (((result1 - result2)<3)||((result2 - result1)<3)) {
    if (result1 > result2) {
  document.getElementById("score1_eq1").innerHTML = 3;
  document.getElementById("score1_eq2").innerHTML = 0;
} else {
  document.getElementById("score1_eq1").innerHTML = 0;
  document.getElementById("score1_eq2").innerHTML = 3;
}
  }else {
    
  }
}




/*function scoreEquip() {
    var text = document.getElementById('result1_1').value;
    document.getElementById("score1_eq1").innerHTML = text;
    var text = document.getElementById('result1_2').value;
    document.getElementById("score1_eq2").innerHTML = text;
}
*/
