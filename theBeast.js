// the beast - a Sherlock Holmes algorithm
//
// Max Volz
// Oct 14th, 2015



// get array length 


// if == 5 place 3s

// else == 3 || > 5 place 5s
var getDecent = function(x){
	var output = "",
		length = x;
	
	while(length > 2){
		if(length == 3 || length > 5){
			output += '555';
			length -= 3;
		}
		else if(length == 5){
			output += '33333';
			length -= 5;
		}	
	}

	if(length == 2 || length == 1){
		return -1;
	}
	return output;
}

var input = 11;
console.log(getDecent(input));
