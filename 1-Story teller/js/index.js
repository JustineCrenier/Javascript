var who = prompt("Qui êtes vous ? (2 questions restantes)");
var where = prompt("Ou êtes vous (1 questions restantes)?");
var what = prompt("Que faites vous ?");

document.getElementById('story').innerHTML = 'Je suis ' + who + ' ' + what + ' ' + where;
