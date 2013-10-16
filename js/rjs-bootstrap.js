require.config({
	baseUrl: 'js'
});

require(['modules/reveal', 'async'], function(reveal, ai) {
	reveal('email');
	ai.init();
});