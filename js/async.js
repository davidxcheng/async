define(['modules/codePointConverter'], function(convert) {
	return {
		init: function() {
			var codePoints = document.getElementById('logo-img')
				.alt
				.split('')
				.map(function(letter) {
					return letter.charCodeAt(0);
				});

			var binary = codePoints.map(function(codePoint) {
				return  '<span>' + convert(codePoint).join(' ') + '</span>';
			});

			document.getElementById('octets').innerHTML = binary.join('');
		}
	};
});