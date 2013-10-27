define([], function() {
	// utf-8 can use up to 31 bits to represent a code point
	// create array of the 31 exponents -> [2147483648, 1073741824 ... 8, 4, 2, 1]
	var power = (function(seed) {
		var pow = [];
		for (var i = 0; i < 32; i++) {
			pow.push(seed);
			seed = seed * 2;
		}
		return pow.reverse();
	})(1);

	/**
	* Returns an array of the binary representation of the codePoint
	* Example: 65 -> [0, 1, 0, 0, 0, 0, 1]
	*/
	var toBinary = function(codePoint) {

		var binary = [];

		power.forEach(function(b) {
			if (codePoint >= b) {
				binary.push(1);
				codePoint = codePoint - b;
			}
			else {
				if (binary.length) // only push significant zeros
					binary.push(0);
			}
		});

		if (binary.length < 8) {
			// pad on zeros to make it at least 8 bits long
			// this simplifies logic for 1-byte sequences (0xxxxxxx)
			var length = 8 - binary.length;
			for (var i = 0; i < length; i++)
				binary = [0].concat(binary);
		}

		return binary;
	};

	/**
	* Prepares octets by adding their headers and returns them in an array
	* Example: [[1, 1, 0], [1, 0]] for a 2-byte sequence
	*/
	var prepareOctets = function(codePoint) {

		var octets = [],
			numberOfOctets = 0;

		if (codePoint < 128)
			numberOfOctets = 1;
		else if (codePoint < 2048)
			numberOfOctets = 2;
		else if (codePoint < 65536)
			numberOfOctets = 3;
		else if (codePoint < 2097152)
			numberOfOctets = 4;
		else if (codePoint < 67108864)
			numberOfOctets = 5;
		else if (codePoint = 2147483647)
			numberOfOctets = 6;

		if (numberOfOctets == 1) {
			octets.push([]);
			return octets;
		}

		var firstOctet = [];
		for(var i = 0; i < numberOfOctets; i++)
			firstOctet.push(1);
		firstOctet.push(0);
		// 110xxxxx signals that there are 2 bytes in the sequence
		// 1110xxxx signals that there are 3 bytes in the sequence and so on.
		octets.push(firstOctet);

		for(var i = 1; i < numberOfOctets; i++)
			// header of subsequent bytes is always 10xxxxxx
			octets.push([1, 0]);

		return octets;
	};

	/**
	* Returns an array of strings of the binary utf8 representation of the code point;
	* Example: 162 -> ["11000010", "10100010"]
	*/
	var toUtf8Octets = function (codePoint) {
		var binary = toBinary(codePoint),
			octets = prepareOctets(codePoint);

		if (octets.length == 1) {
			octets[0] = binary.join('');
			return octets;
		}

		var bitsToFitInTheFirstOctet = binary.length % 6,
			freeSlotsInFirstOctet = 8 - octets[0].length;

		if (freeSlotsInFirstOctet > bitsToFitInTheFirstOctet) {
			for (var i = 0; i < freeSlotsInFirstOctet - bitsToFitInTheFirstOctet; i++)
				binary = [0].concat(binary);
		}

		var cursor = 0,
			length = 0;

		octets.forEach(function(oct, i) {
			length = 8 - oct.length;
			octets[i] = oct.concat(binary.slice(cursor, cursor + length)).join('');
			cursor = cursor + length;
		});

		return octets;
	};

	return toUtf8Octets;
});
