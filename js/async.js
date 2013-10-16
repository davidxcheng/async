(function(doc, async) {
	async.reveal = function () {
		var el = doc.getElementById('email');

		if (el && el.rel){
			var adr = el.rel.replace('//', '@').replace(/\//g, '.');
			el.href = 'mailto:' + adr;
			el.innerText = adr;
		}
	};

	if (doc.readyState == 'complete') {
		// just in case DOMContentLoaded has already been fired
		async.reveal();
	}
	else if (doc.addEventListener) {
		// < ie9 dont have addEventListener (and don't get to see adr)
		document.addEventListener('DOMContentLoaded', async.reveal, false);
	}
})(document, document.async || {});

var ascii = document.getElementById('logo-name')
	.innerText
	.split('')
	.map(function(letter) {
		return letter.charCodeAt(0);
	});

document.getElementById('ascii').innerText = ascii.join(' ');