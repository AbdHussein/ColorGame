var header = $("#colorDisplay");

function generateColor() {
	var red = Math.floor(Math.random()*255);
	var green = Math.floor(Math.random()*255);
	var blue = Math.floor(Math.random()*255);
	var rgb = "rgb("+red+","+green+","+blue+")";	
	return rgb;
}

function generateRandomColors(num){	
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(generateColor());
	}
	return arr;
}

header.text(generateColor()); 