var path = require('path');
var rootDir = path.dirname(require.main.filename);

exports.index = function(req, res) {
	res.sendFile(rootDir + '/client/views/index.html');
}