var a = 10;
var b = 20;

var changeNum = function() {

	var aLength = (a).toString().length;
	var bLength = (b).toString().length;
	var koef;

	if( aLength + bLength < (Number.MAX_SAFE_INTEGER).toString().length){
		message("BEFORE");

		if (aLength > bLength){
			koef = Math.pow(10, bLength);
			a *= koef;
			a += b;
			b = Math.floor(a / koef);
			a %= koef;
		} else {
			koef = Math.pow(10, aLength);
			b *= koef;
			b += a;
			a = Math.floor(b / koef);
			b %= koef;
		}

		message("AFTER");
	} else {
		console.warn('The numbers are too big');
	}
};

var changeString = function() {
	message("BEFORE");

	a += '';
	aLength = a.length;
	b = a += b;
	a = +a.substring(aLength);
	b = +b.substring(0, aLength);

	message("AFTER")
};

var message = function(status) {
	console.log("-----------------%s------------------", status);
	console.log("a = " + a);
	console.log("b = " + b);
}