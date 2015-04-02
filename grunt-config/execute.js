module.exports = function(grunt, options){
  var yeoman = require('yeoman');
  return {
	  target: {
	    src: [yeoman.app + '/assemble/helpers/updateScss.js']
	  }
	}
};