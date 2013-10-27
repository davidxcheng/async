define(['modules/codePointConverter'], function(convert) {

	var binder = function() {
		var lblOutput = document.getElementById('output');
		document.getElementById('str')
			.onkeyup = function(e) {
				if (!this.value.length) return;

				console.log(convert(this.value.charCodeAt(0)));
				lblOutput.innerHTML = this.value.charCodeAt(0);
			};
	}

	return {
		init: function() {
			var codePoints = document.getElementById('alpha')
				.innerText
				.split('')
				.map(function(letter) {
					return letter.charCodeAt(0);
				});

			var binary = codePoints.map(function(codePoint) {
				return  '<span>' + convert(codePoint).join(' ') + '</span>';
			});
			document.getElementById('octets').innerHTML = binary.join('');

			binder();
		}
	};
});