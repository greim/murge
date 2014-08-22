var qunit = require('./qunit/node_modules/qunit/index.js');

qunit.run({

	code: { path: '../murge.js', namespace: 'murge' },
	tests: 'tests.js'

});