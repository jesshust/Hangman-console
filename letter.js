
var Letter = function(let) {
	this.character = let.toLowerCase(); 

	//make an appear property and set it to what makes sense
	this.appear = false; 
	//make a letterRender property and set it to a function that does what you think makes sense
	this.letterRender = function() {
		if(this.appear) {
			return this.character; 
		}else {return "_"; 
		}
		
	}
};

exports.Letter = Letter;