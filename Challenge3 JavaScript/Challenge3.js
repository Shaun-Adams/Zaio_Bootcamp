//variables 
var blue_div = document.getElementById("blue");
var green_div = document.getElementById("green");
var red_div = document.getElementById("red");
var box2_div = document.getElementById("box2");
var textbox_div = document.getElementById("textbox");
var cal_div = document.getElementById("cal");

//function to change the colour of the right box when clicked and display the calcultion of asc ii value of this box colour
function Blue(){
	document.getElementById("box2").style.backgroundColor = "#1280B1"; //changes background colour of right big box to colour selected
	textbox_div.innerHTML = "Hi, my name is Blue"; //output text
	cal_div.innerHTML = `Sum of ASCII value: ${['B','l','u','e'].reduce((i,s)=>s.charCodeAt(0)+i,0)}` //output sum of asc ii value of colour
}

//function to change the colour of the right box when clicked and display the calcultion of asc ii value of this box colour
function Green(){
	document.getElementById("box2").style.backgroundColor = "#31b43a"; //changes background colour of right big box to colour selected
	textbox_div.innerHTML = "Hi, my name is Green"; //output text
	cal_div.innerHTML = `Sum of ASCII value: ${['G','r','e','e','n'].reduce((i,s)=>s.charCodeAt(0)+i,0)}` //output sum of asc ii value of colour
}

//function to change the colour of the right box when clicked and display the calcultion of asc ii value of this box colour
function Red(){
	document.getElementById("box2").style.backgroundColor = "#fc121b"; //changes background colour of right big box to colour selected
	textbox_div.innerHTML = "Hi, my name is Red"; //output text
	cal_div.innerHTML = `Sum of ASCII value: ${['R','e','d'].reduce((i,s)=>s.charCodeAt(0)+i,0)}` //output sum of asc ii value of colour
}


//function to execute the change of colour when box is selected, takes in perameter of user choice
function ColourChange(userChoice){
	/*
	switch method instead of if-else-statements that compares userChoice to the box selected 
	and changes the colour when box is selected 
	*/ 
	switch(userChoice){
		case "Blue":
			Blue(userChoice); //Calling Blue function
			break;

		case "Green":
			Green(userChoice); //Calling Green function
			break;

		case "Red":
			Red(userChoice); //Calling Red function
			break;		
	}
}

//main function to execute everything
function main(){
	//addEventListener that waits until rock, paper or scissors is clicked to execute the game function
	blue_div.addEventListener('click', function(){
		ColourChange("Blue") //Calling game function
	})
	green_div.addEventListener('click', function(){
		ColourChange("Green")	//Calling game function
	})
	red_div.addEventListener('click', function(){
		ColourChange("Red")	//Calling game function
	})
}

//Calling the main function
main();