var header = $("h1");
var numOfsquares = 6;
var squares =$(".square");
var displaycolors = $("#colorDisplay");
var messgDisplay = $("#message");
var reset = $("#reset");

var colors = generateRandomColors(numOfsquares);
var trueColor = colors[Math.floor(Math.random()*colors.length)];
header.text(trueColor);

reset.click(function(){
	init();
});

init();
function init(){	
	fillSquares(colors);
	setupSquares();
	//reset();
}

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

function fillSquares(colors){
	for(var i = 0; i < colors.length; i++){
		squares[i].style.background = colors[i];
	}	
}

function setupSquares(){
	for(var i =0 ; i <squares.length ; i++){
		squares[i].addEventListener("click",function(event){
			var clickedColor = $(event.target).css('background');
			console.log(clickedColor);			
			if(clickedColor === trueColor){
				messgDisplay.text("Correct!");
				reset.text("Play again!");				
			}
			else{
				$(event.target).css('background','white');
				messgDisplay.text("Try again!");
				messgDisplay.css('color','white');
			}
		})
	}
}