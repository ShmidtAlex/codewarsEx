function palindrom(str){	
	let arr = str.toLowerCase().split('').filter(function(elem){
		let pattern = /[a-zа-я0-9]/;
		if(elem.match(pattern)){
			return elem;
		}		
	})
	let oldStr = arr.join('');
	let reversedArr = arr.reverse().join('');
	return oldStr === reversedArr;
}
palindrom("Ш4л4ш");
palindrom('Eva, can I see bees in a cave');
palindrom('Яндекс');
palindrom('Yandex');