//import Letter above with requiring the letter.js file
var Letter = require('./letter.js');

var Word = function(wrd){
	//set a property called word and set it equal to what you think it should be
	var word = wrd; 
	//set a property called lets to an empty array. We will eventually push letter objects in here
	var lets = []; 
	//set a property called found to false
	var found = false; 
	//make a property called getLets, set it to a function and inside the function loop over the word property and push letter objects into the lets property.
	var getLets = function() {
		for(i = 0; i < word.length; i++){
			lets.push(new Letter (word[i])); 
		}
	}
	//returns true or false whether we found the current word or not
	this.didWeFindTheWord = function() {
		//set the found property to true or false based on whether all the letters have been found or not
		found = true; 
		for (i = 0; i < lets.length; i++)
		{
			if (lets[i].appear == false) {
				found = false; 
			} 
		}
		//return the found property
		return found; 
	};

	this.checkIfLetterFound = function(guessLetter) {
		//set a variable whatToReturn to 0
		var whatToReturn = 0; 

		//loop over the lets property and if the letter object's charac property equals the guessletter then set the appear property of the letter object to be true. Also increment whatToReturn.
		for (i = 0; i < lets.length; i++) {
			if(lets[i].character == guessLetter.toLowerCase){
				lets[i].appear = true; 
				whatToReturn++; 
			}
		}
		//return whatToReturn
		return whatToReturn; 
	};

	this.wordRender = function() {
		//make a variable named str and set it to empty quotes
		var str = ""; 

		//loop over this.lets and call the letterRender property of the letter object that you're looping over, and add it to str
		for (i = 0; i <this.lets.length; i++){
			str += lets[i].letterRender(); 
		}
		//return str
		return str; 
	};
}

//export the Word constructor here at the end
exports.Word = Word; 