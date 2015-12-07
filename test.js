function scoreEquip(foo, bar, foo1) {
  var result1 = document.getElementById('result1_1').value;
  var result2 = document.getElementById('result1_2').value;
    
  

  if (result1 == result2) {
   document.getElementById("a1").innerHTML = 1;
   document.getElementById("a2").innerHTML = 1;

  } else if (((result1 - result2)>3)||((result2 - result1)>3)) {
    if (result1 > result2) {
  document.getElementById("score1_eq1").innerHTML = 4;
  document.getElementById("score1_eq6").innerHTML = 0;
} else {
  document.getElementById("score1_eq1").innerHTML = 0;
  document.getElementById("score1_eq6").innerHTML = 4;
}
  } else if (((result1 - result2)<3)||((result2 - result1)<3)) {
    if (result1 > result2) {
  document.getElementById("score1_eq1").innerHTML = 3;
  document.getElementById("score1_eq6").innerHTML = 0;
} else {
  document.getElementById("score1_eq1").innerHTML = 0;
  document.getElementById("score1_eq6").innerHTML = 3;
}
  }else {
        }
}
