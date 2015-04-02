module.exports = function(grunt, options){
	var connect = require('connect');
  return {
	  server: {
	    path: 'http://localhost:' + connect.options.port
	  }
	}
};