var header = $("#colorDisplay");

function generateColor() {
	var red = Math.floor(Math.random()*255)
	var green = Math.floor(Math.random()*255)
	var blue = Math.floor(Math.random()*255)
	var rgb = "rgb("+red+","+green+","+blue+")"	
	return rgb;
}

header.text(generateColor()); 