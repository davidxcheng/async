define([], function() {

	var reveal = function(id) {
		var el = document.getElementById('email');

		if (el && el.rel){
			var adr = el.rel.replace('//', '@').replace(/\//g, '.');
			el.href = 'mailto:' + adr;
			el.innerText = adr;
		}
	};

	return reveal;
});