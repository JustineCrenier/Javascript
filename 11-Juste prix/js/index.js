//VARIABLES
let justePrix;//juste prix tiré au hazard
let i = 1;
let rep = prompt(`Quel est le juste prix ?`);
let j = 0;

//GET A RANDOM NUMBER
let getJustePrix = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

justePrix = getJustePrix(20,81);

//FONCTION VERIFIER JUSTE PRIX
 let verifier = (rep) => {
 	if(rep == justePrix){
 		alert(`C'est juste tu as trouvé en ${i} coups`);
 		j = 1;
 	}else{
 		if(rep>justePrix){
 			alert(`c'est moins !`);
 		}else if (Number(rep)<justePrix) {
 			alert(`c'est plus !`);
 		}
 		i++;
 		rep = prompt(`Quel est le juste prix ?`);
 	}
 	return rep
 }

//VERIFIER JUSTE PRIX
 do{
 	rep = verifier(rep);	
 }while(j != 1)




