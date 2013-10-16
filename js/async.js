(function(doc, ai) {
	ai.reveal = function () {
		var el = doc.getElementById('email');

		if (el && el.rel){
			var adr = el.rel.replace('//', '@').replace(/\//g, '.');
			el.href = 'mailto:' + adr;
			el.innerText = adr;
		}
	};

	if (doc.readyState == 'complete') {
		// just in case DOMContentLoaded has already been fired
		ai.reveal();
	}
	else if (doc.addEventListener) {
		// < ie9 dont have addEventListener (and don't get to see adr)
		document.addEventListener('DOMContentLoaded', ai.reveal, false);
	}
})(document, document.ai || {});

function toBinary(codePoint) {
	var bin = [64, 32, 16, 8, 4, 2, 1],
		res = [0];

	bin.map(function(x) {
		if (codePoint >= x) {
			res.push(1);
			codePoint = codePoint - x;
		}
		else {
			res.push(0);
		}
	})

	return res.join('');
}

var ascii = document.getElementById('logo-name')
	.innerText
	.split('')
	.map(function(letter) {
		return letter.charCodeAt(0);
	});

document.getElementById('ascii').innerText = ascii.join(' ');
var binary = ascii.map(function(codePoint) {
	return toBinary(codePoint);
});
document.getElementById('binary').innerText = binary.join(' ');