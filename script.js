var header = $("#main")
function color() {
	var red = Math.floor(Math.random()*255)
	var green = Math.floor(Math.random()*255)
	var blue = Math.floor(Math.random()*255)
	var rgb = "rgb("+red+","+green+","+blue+")"
	// body...
	return rgb;
}

header.css({"background-color":color(),"height":"50px"})