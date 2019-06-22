// this file isnt transpiled, use common js or es5

// Register babel to transpile before the tests run
require('babel-register')();

//Disable webpack features that Mocha doesnt understand
require.extensions['.css'] = function(){};
