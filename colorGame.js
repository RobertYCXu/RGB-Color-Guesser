var numSquares = 6;
var color = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
titlecolor.textContent = pickedColor;
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

init();
function init(){
	for(var i = 0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			resetMode();
		})
	}
	for(var i = 0; i<squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if (clickedColor===pickedColor){
				message.textContent = "Correct!"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				reset.textContent = "Play Again";
				this.classList.remove("mousehover");

			}else{
				this.style.background = "#232323";
				message.textContent = "Try Again"
				this.classList.remove("mousehover");
			}
		});
		squares[i].addEventListener("mouseenter", function(){
			if(h1.style.background === pickedColor){
				this.classList.remove("mousehover");
			}else{this.classList.add("mousehover");}
			
		})
		

	}
	resetMode();

}


reset.addEventListener("click", function(){
	resetMode();
})



function resetMode(){
	color = generateRandomColors(numSquares);
	pickedColor = pickColor();
	titlecolor.textContent = pickedColor;
	for(var i = 0; i<squares.length; i++){
		if(color[i]){
			squares[i].style.display = "block";
			squares[i].style.background = color[i];
		}else{
			squares[i].style.display = "none";
		}
		
	}
	h1.style.background = "steelblue";
	reset.textContent = "New Colors"
	message.textContent = "";
}





function changeColors(color){
	for(var i = 0; i<squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var ranIndex = Math.floor(Math.random() * color.length);
	return color[ranIndex];
}

function generateRandomColors(x){
	// make array
	var arr = [];
	for(var i = 0; i<x; i++){
		arr.push(randomColor());

	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return"rgb(" + r + ", " + g + ", " + b + ")"

}