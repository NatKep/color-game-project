var numberOfColors = 6;
var newArray = generateColors();


var squares = document.querySelectorAll(".square");
var headlineColorName = document.querySelector("#headlineColorName");
var h1 = document.querySelector("#headline");
var message = document.querySelector("#message");
var reset = document.querySelector("#btn1");
var easy = document.querySelector("#btn2");
var hard = document.querySelector("#btn3");

var changeHeadline = changeHeadline();
hard.classList.add("clicked");

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = newArray[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (headlineColorName.textContent === clickedColor){
			h1.style.backgroundColor = clickedColor;
			changeColorsWin(clickedColor);
			message.textContent = "Correct!";
			reset.textContent = "Play Again?"
		} else {
		this.style.backgroundColor = "#232323";
		message.textContent = "Try Again";
		}
	})
}



easy.addEventListener("click", function(){
	h1.style.backgroundColor = "steelblue";
	numberOfColors = 3;
	generateColors();
	pickColor();
	headlineColorName.textContent = pickColor();

	for (var i = 0; i < squares.length; i++) {
		if (newArray[i]) {
			squares[i].style.backgroundColor = newArray[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	message.textContent = "";
	hard.classList.remove("clicked");
	this.classList.add("clicked");
	reset.textContent = "new colors";
})

hard.addEventListener("click", function(){
	h1.style.backgroundColor = "steelblue";
	numberOfColors = 6;
	generateColors();
	pickColor();
	headlineColorName.textContent = pickColor();

	for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = newArray[i];
	squares[i].style.display = "block";
	message.textContent = "";
	}
	easy.classList.remove("clicked");
	this.classList.add("clicked");
	reset.textContent = "new colors";
})

reset.addEventListener("click", function(){
	h1.style.backgroundColor = "steelblue";
	numberOfColors = 6;
	generateColors();
	pickColor();
	headlineColorName.textContent = pickColor();

	for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = newArray[i];
	squares[i].style.display = "block";
	}
	message.textContent = "";
	reset.textContent = "new colors";
})

function changeColorsWin(color){
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function changeHeadline(){
	headlineColorName.textContent = pickColor();
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return newColor = "rgb(" + r + ", " + g + ", " + b + ")";
};

function generateColors(){
	newArray = [];
	for (var i = 0; i < numberOfColors; i++) {
		newArray.push(randomColor());
	}
	return newArray;
};

function pickColor(){
	var id = Math.floor(Math.random() * numberOfColors);
	return newArray[id];
};





