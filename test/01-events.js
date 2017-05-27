define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var helper = require("htmlparser2/test-helper.js");

helper.mochaTest("Events", __dirname, function(test, cb){
	helper.writeToParser(
		helper.getEventCollector(cb),
		test.options.parser,
		test.html
	);
});

return module.exports;});
