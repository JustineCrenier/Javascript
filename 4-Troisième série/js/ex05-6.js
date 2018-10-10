for (let i=1; i<6; i++){
	let image = `image${i}`;
	const img = document.getElementById(image);

	img.addEventListener("mouseenter", function(){
		img.setAttribute('src', `images/${image}_2.jpg`);		
	});

	img.addEventListener("mouseleave", function(){
		img.setAttribute('src', `images/${image}.jpg`);		
	});
}


