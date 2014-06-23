function tripleFive(){
	for(var i = 0; i < 3; i++) {
		console.log('Five!');
	}
}

// tripleFive();

function lastLetter(string){
	console.log(string.slice(string.length-1));
}

// lastLetter('hello');
// lastLetter('island');

function negate(number){
	console.log(-number);
}

// negate(5);
// negate(-8);

function toArray(item, item2, item3){
	var merged = [];
	merged.push(item);
	merged.push(item2);
	merged.push(item3);
	console.log(merged);
}

// toArray(1, 4, 5);
// toArray(8, 9, 10);

function startsWithA(word){
	if(word[0].toLowerCase() === 'a'){
		console.log('TRUE');
	}else {
		console.log('FALSE');
	}
}

// startsWithA('aardvark');
// startsWithA('bear');

function excite(string){
	console.log(string + '!!!');
}

// excite('yes');
// excite('go');

function sun(string){
	if(string.toLowerCase().indexOf('sun') !== -1){
		console.log(true);
	}else {
		console.log(false);
	}
}

// sun('sundries');
// sun('asunder');
// sun('catapult');

function tiny(num){
	if(num > 0 && num < 1){
		console.log(true);
	}else {
		console.log(false);
	}
}

