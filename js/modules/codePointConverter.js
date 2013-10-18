define([], function() {
	return {
		toUtf8BinaryStringRepresentation: function(codePoint) {
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
	};
});