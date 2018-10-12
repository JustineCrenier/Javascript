const submit = document.getElementsByTagName('button')[0];

submit.addEventListener("click", function(){

	let mdp = document.getElementById('motdepasse');
	let conf = document.getElementById('confirmation');
	let mdpValue = mdp.value;
	let confValue = conf.value;
	
	if(mdpValue === confValue){
		mdp.setAttribute('style', 'border: 2px solid green;');
		conf.setAttribute('style', 'border: 2px solid green;');
	}else{
		mdp.setAttribute('style', 'border: 2px solid red;');
		conf.setAttribute('style', 'border: 2px solid red;');	
	}

});

