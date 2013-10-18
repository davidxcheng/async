define(['modules/codePointConverter'], function(convert) {

	return {
		init: function() {
			var codePoints = document.getElementById('alpha')
				.innerText
				.split('')
				.map(function(letter) {
					return letter.charCodeAt(0);
				});

			document.getElementById('dec').innerHTML = codePoints.map(function(codePoint) {
				return '<span>' + codePoint + '</span>';
			}).join('');

			var binary = codePoints.map(function(codePoint) {
				return  '<span>' + convert.toUtf8BinaryStringRepresentation(codePoint) + '</span>';
			});
			document.getElementById('binary').innerHTML = binary.join('');
		}
	};
});