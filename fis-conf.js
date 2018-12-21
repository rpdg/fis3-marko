fis.match("**.marko", {
	parser: fis.plugin("marko4", {

	}),
	rExt: '.html'
});


fis.match('{/comm/*.*,*.json}', {
	release: false
});
