////   fonction scoreEquip(foo,bar,foo1,bar1) { }
//// result_foo_bar  :  resultat match foo euipe bar
//////  score_foo_eq_bar : score equipe foo match bar

/*
    TOUR 1:
        1 vs 6
        2 vs 5
        3 vs 4
        
    TOUR 2:
        1 vs 5
        6 vs 4
        2 vs 3
        
    TOUR 3:
        1 vs 4
        5 vs 3
        6 vs 2
        
    TOUR 4:
        1 vs 3
        4 vs 2
        5 vs 6
        
    TOUR 5:
        1 vs 2
        3 vs 6
        4 vs 5
*/

var matches = [
    {
        a: 1,
        b: 6
    },
    {
        a: 2,
        b: 5
    },
    {
        a: 3,
        b: 4
    },
    {
        a: 1,
        b: 5
    },
    {
        a: 6,
        b: 4
    },
    {
        a: 2,
        b: 3
    },
    {
        a: 1,
        b: 4
    },
    {
        a: 5,
        b: 3
    },
    {
        a: 6,
        b: 2
    },
    {
        a: 1,
        b: 3
    },
    {
        a: 4,
        b: 2
    },
    {
        a: 5,
        b: 6
    },
    {
        a: 1,
        b: 2
    },
    {
        a: 3,
        b: 6
    },
    {
        a: 4,
        b: 5
    }
];

function scoreEquip() {
    var scoreTotal = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    };

    for (var i = 0; i < matches.length; i++) { // i = 0 si i < 15 on ajoute ++ (car 15 matchs dans le tableau matches)
        var resultNameA = 'result_' + matches[i].a + 'vs' + matches[i].b + '_a'; // => result_1vs6_a
        var resultNameB = 'result_' + matches[i].a + 'vs' + matches[i].b + '_b';
        var resultA = document.getElementById(resultNameA).value; // récup valeur resultatNameA result_1vs6_a 
        var resultB = document.getElementById(resultNameB).value; // récup valeur resultatNameb result_1vs6_b 

        if (resultA === '' || resultB === '') { // Si un resultA ou resultB n'a pas d'entrée on passe directement au tour de boucle suivant
            continue;
        }

        var scoreA = calculateScore(resultA - resultB); // Appel function calculateScore pour comparer écart de but 1vs6
        var scoreB = calculateScore(resultB - resultA); // Appel function calculateScore pour comparer écart de but 6vs1 

        scoreTotal[matches[i].a] += scoreA;
        scoreTotal[matches[i].b] += scoreB;
        

        var tour = Math.floor(i / 3) + 1; // il y a 15 matchs sur 5 tours et on a 3 match par tour, donc pour récupérer le tour actuel on divise par 3
        var scoreNameA = 'score' + tour + '_eq' + matches[i].a; //same que pour resultNameA et B
        var scoreNameB = 'score' + tour + '_eq' + matches[i].b;

        document.getElementById(scoreNameA).innerHTML = scoreA;
        document.getElementById(scoreNameB).innerHTML = scoreB;
    }

    console.log(scoreTotal);
}

function calculateScore(v) {
    if (v == 0) {
        return 1;
    } else if (v < 0) {
        return 0;
    } else if (v < 3) {
        return 3;
    } else if (v > 3) {
        return 4;
    }

    return 0;
}

/*
function scoreEquip() {
    var result1 = document.getElementById('result1_1').value;
    var result2 = document.getElementById('result1_2').value;

    if (result1 == result2) {
        document.getElementById("score1_eq1").innerHTML = 1;
        document.getElementById("score1_eq6").innerHTML = 1;

    } else if (((result1 - result2) > 3) || ((result2 - result1) > 3)) {
        if (result1 > result2) {
            document.getElementById("score1_eq1").innerHTML = 4;
            document.getElementById("score1_eq6").innerHTML = 0;
        } else {
            document.getElementById("score1_eq1").innerHTML = 0;
            document.getElementById("score1_eq6").innerHTML = 4;
        }
    } else if (((result1 - result2) < 3) || ((result2 - result1) < 3)) {
        if (result1 > result2) {
            document.getElementById("score1_eq1").innerHTML = 3;
            document.getElementById("score1_eq6").innerHTML = 0;
        } else {
            document.getElementById("score1_eq1").innerHTML = 0;
            document.getElementById("score1_eq6").innerHTML = 3;
        }
    } else {

    }
}
*/