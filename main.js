//diastic alogrithm
function diastic(seed, words) {

	//we want to store what we find in a str
	var phrase = "";
	//we dont want to start the loop from the beginning each time, so we'll make an int var to track the last word:
	var currentWord = 0;

	//first loop through the seed:
	for (var i = 0; i < seed.length; i++) {
		//getting the char at each point in the string:
		c = seed.charAt(i);
		//and now we want to loop through the words, starting from the current word var
		for (var j = currentWord; j < words.length; j++) {
			//now we want to check to see if the word at j and the specific char we are looking for has the same char value:
			if (words[j].charAt(i) == c) {
				phrase += words[j] + " ";
				//when we find a word we want to start again from the next word
				currentWord = j + 1;
				//console.log(words[j]);
				break;
			}
		}
	}
	return phrase;
}





var srctxt;
var word; //words will be an array with all the words from srctxt

function preload() {
	srctxt = loadStrings("randomTextFile.txt"); //remeber that the data from the text file is loaded into an array 
}

function setup() {
	noCanvas();
	var phrase;
	//createP("This is a test");
	srctxt = join(srctxt, ' '); //as the data is in an array, we are joining it with the join method.
	word = splitTokens(srctxt, ' ,.!?'); //splitTokens is a p5.js function. what it does is split by the individual tokens specified in the second param
	var seed = select("#seed");
	var submit = select("#submit");

	submit.mousePressed(function(){
		//createP(seed.value());

		//calling the diastic function
		phrase = diastic(seed.value(), word)
		createP(phrase);
	});


	
}

function draw() {
	//no need for draw  loop
}