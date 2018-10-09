var tab = [-2, 1, 4];

function soustraire (x){
  if (x >= 0){
    var rep = x - 2;
    return rep
  }else{
    return "Nombre négatif!";
  }
}

function afficher() {
  alert(soustraire(tab[0]));
  alert(soustraire(tab[tab.length - 1]));
}