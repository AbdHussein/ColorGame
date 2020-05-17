var header = $("h1");
var numOfsquares = 6;
var squares =$(".square");
var displaycolors = $("#colorDisplay");
var messgDisplay = $("#message");
var reset = $("#reset");
//---------------
reset.click(function(){	
	location.reload();
	init();
	reset.text('New colors');
	messgDisplay.text('');	
});

init();
function init(){	
	var colors = generateRandomColors(numOfsquares);
	var trueColor = colors[Math.floor(Math.random()*colors.length)];
	displaycolors.text(trueColor);//rgb;
	fillSquares(colors);
	setupSquares(trueColor);	
}

function generateColor() {
	var red = Math.floor(Math.random()*255);
	var green = Math.floor(Math.random()*255);
	var blue = Math.floor(Math.random()*255);
	var rgb = "rgb("+red+", "+green+", "+blue+")";	
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

function setupSquares(trueColor){
	for(var i =0 ; i < squares.length ; i++){
		squares[i].addEventListener("click",function(){
			var clickedColor = $(this).css('background-color');								
			if(clickedColor === trueColor){		
				messgDisplay.text("Correct!");
				messgDisplay.css({'color':'white'})
				reset.text("Play again?");	
				for(var i =0 ; i < squares.length ; i++){
					squares[i].style.background = clickedColor;
				}			
			}
			else{
				$(this).css('background','white');
				messgDisplay.text("Try again!");
				messgDisplay.css('color','white');
			}
		})
	}
}