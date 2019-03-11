

function joinNumber(...arguments) {
	let devider;
	arguments.map(function(elem, i, arg){
		let deviderPosition;
		if(typeof elem === "string"){
			devider = elem;
			deviderPosition = arg.lastIndexOf(elem);
			console.log(deviderPosition);
			return arg.splice(deviderPosition+2, 0, devider);;
		}		
	});

	let result;
	if(typeof arguments[0] !== 'number'){
		arguments.shift();		
	}
	console.log(arguments.join(''));
	return arguments.join('');
}
joinNumber("!", 1, 0, 5, -11);