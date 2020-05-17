var header = $("h1");
var numOfsquares = 6;
var squares =$(".square")
var displaycolors = $("#colorDisplay")
var messgDisplay = $("#message")
var reset = $("#reset")

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
var colors = generateRandomColors(numOfsquares);
var trueColor = colors[Math.floor(Math.random()*colors.length)];
header.text(trueColor);

function createSquares(){
	for(var i =0 ; i <squares.length ; i++){
		squares[i].on("click",function(){
			var clickedColor = $(this).style.background
			if(clickedColor === trueColor){
				messgDisplay.text("Correct!")
				reset.text("Play again!")
			}
			else{
				$(this).style.background = "white"
				messgDisplay.text("Try again!")

			}

		})
	}
}

