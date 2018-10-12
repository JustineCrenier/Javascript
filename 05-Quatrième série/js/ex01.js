const img = document.getElementById('image1');

img.addEventListener("mouseenter", function(){
	img.setAttribute('style', 'border: 3px solid red;');		
});
img.addEventListener("mouseleave", function(){
	img.setAttribute('style', 'border: none;');		
});