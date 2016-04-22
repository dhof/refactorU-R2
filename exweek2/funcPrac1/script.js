// function tripleFive() {
// 	for(i = 0; i < 3; i++) {
// 		console.log('five!')
// 	}
// }

// tripleFive()

// var x = 10;
// function y() {
//     console.log(x); //Prints undefined
//     var x = 20;
//     console.log(x); //Prints 20
// }
// y();
// console.log(x); //Prints 10


// function lastLetter(string) {
// 	// var x = string.length - 1;
// 	return string[string.length - 1]
// }

// console.log(lastLetter("monkeys"))


// function square(x) {
// 	return x * x
// }

// console.log(square(5))


// function negate(x) {
// 	return x * -1
// }

// console.log(negate(-5))


// function toArray(x, y, z) {
// 	var array = []
// 	array.push(x)
// 	array.push(y)
// 	array.push(z)
// 	return array
	
// }

// console.log(toArray(1, 3, 5))


// function startsWithA(string) {
// 	if (string[0] === "a" || string[0] === "A") {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// console.log(startsWithA("angular"))


// function excite(string) {
// 	return string + "!!!"
// }

// console.log(excite("cheesey"))


// function sun(string) {
// 	if (string.indexOf('sun') >= 0) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// console.log(sun("tomatoes"))


// function tiny(x) {
// 	if (x > 0 && x < 1) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// console.log(tiny(.5))


function getSeconds(string) {
	var x = string[0] + string[1]
	var y = string[3] + string[4]
	var time = Number(x) * 60 + Number(y)
	return time
}

console.log(getSeconds("01:22"))