define(['modules/codePointConverter'], function(convert) {

	return {
		init: function() {
			var ascii = document.getElementById('logo-name')
				.innerText
				.split('')
				.map(function(letter) {
					return letter.charCodeAt(0);
				});		

			document.getElementById('ascii').innerText = ascii.join(' ');
			var binary = ascii.map(function(codePoint) {
				return convert.toUtf8(codePoint);
			});
			document.getElementById('binary').innerText = binary.join(' ');
		}
	};
});