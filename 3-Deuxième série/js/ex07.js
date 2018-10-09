function faireChoix(){
	var rep = prompt('Fais un choix entre 1 2 ou 3');

	switch (rep) {
  		case '1':
    		alert('1. merci');
    	break;
  		case '2':
    		alert('2. Bonjour');
    	break;
  		case '3':
    		alert('3. Au revoir');
    	break;
		default:
    		alert('Pardon, que voulez-vous ?');
	}
}

faireChoix();