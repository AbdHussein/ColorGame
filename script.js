var numOfsquares = 6;
var squares =$(".square");
var displaycolors = $("#colorDisplay");
var messgDisplay = $("#message");
var reset = $("#reset");

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
//create random color
function generateColor() {
	var red = Math.floor(Math.random()*255);
	var green = Math.floor(Math.random()*255);
	var blue = Math.floor(Math.random()*255);
	var rgb = "rgb("+red+", "+green+", "+blue+")";	
	return rgb;
}
//Add num of color in array
function generateRandomColors(num){	
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(generateColor());
	}
	return arr;
}
//take each div color from array
function fillSquares(colors){
	for(var i = 0; i < colors.length; i++){
		squares[i].style.background = colors[i];
	}	
}
//compare if display color equal any div color
function setupSquares(trueColor){
	for(var i =0 ; i < squares.length ; i++){
		squares[i].addEventListener("click",function(){
			var clickedColor = $(this).css('background-color');								
			if(clickedColor === trueColor){		
				messgDisplay.text("Correct!");
				messgDisplay.css({'color':'yellow',"font-size":"20px"})
				reset.text("Play again?");	
				for(var i =0 ; i < squares.length ; i++){
					squares[i].style.background = clickedColor;
				}			
			}
			else{
				$(this).css('background','white');
				messgDisplay.text("Try again!");
				messgDisplay.css({"color":"red","font-size":"20px"});
			}
		})
	}
}