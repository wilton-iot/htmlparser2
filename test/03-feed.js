define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
//Runs tests for feeds

var helper = require("htmlparser2/test-helper.js"),
    FeedHandler = require("..").RssHandler,
    fs = require("fs"),
    path = require("path");

helper.mochaTest("Feeds", __dirname, function(test, cb){
	fs.readFile(
		path.join(__dirname, "Documents", test.file),
		function(err, file){
			helper.writeToParser(
				new FeedHandler(cb),
				{ xmlMode: true },
				file.toString()
			);
		}
	);
});

return module.exports;});
