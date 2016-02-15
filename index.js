'use strict';

var thru2 = require('through2');
var gutil = require('gulp-util');
var imba = require('imba/compiler');

var NAME = 'gulp-imba';
var PluginError = gutil.PluginError;

module.exports = function() {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new PluginError(NAME, 'Streaming not supported'));
			return;
		}

		var data;

		try {
			data = imba.compile(file.contents.toString('utf8'));
		} catch (err) {
			this.emit('error', new PluginError(NAME, err, {fileName: file.path}));
		}

		// make .js file
		file.path = gutil.replaceExtension(file.path, '.js');
		// assign data
		file.contents = new Buffer(data);

		cb(null, file);
	});
};
