function conversionTemperature(){

	let unite = prompt('Choisissez une unité en indiquant un des numéros correspondant ci-dessous : \n0. Fin du Programme\n1. De Celsius vers Fahrenheit\n2. De Celsius vers Kelvin\n3. De Fahrenheit vers Celsius\n4. De Fahrenheit vers Kelvin\n5. De Kelvin vers Celsius\n6. De Kelvin vers Fahrenheit');

	switch (unite) {
		case '0':
			alert('fin du programme, bye !');
			break;
		case '1':
			let temperature = prompt('Quel température souhaitez-vous convertir ?');
			let Fc = (temperature* (9/5)) +32;
			alert(Fc); 
			break;
		case '2':
			temperature = prompt('Quel température souhaitez-vous convertir ?');
			let Kc = Number(temperature) +273.15;
			alert(Kc);
			break;
		case '3':
			temperature = prompt('Quel température souhaitez-vous convertir ?');
			let Cf = (temperature - 32) / (9/5);
			alert(Cf);
			break;
		case '4':
			temperature = prompt('Quel température souhaitez-vous convertir ?');
			let Kf = ((temperature - 32) * (5/9)) +273.15;
			alert(Kf);
			break;
		case '5':
			temperature = prompt('Quel température souhaitez-vous convertir ?');
			let Ck = temperature - 273.15;
			alert(Ck);
			break;
		case '6':
			temperature = prompt('Quel température souhaitez-vous convertir ?');
			let Fk = (temperature * (9/5)) - 459.67;
			alert(Fk);
			break;
	}
}



