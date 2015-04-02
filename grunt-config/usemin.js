module.exports = function(grunt, options){
  var yeoman = require('yeoman');
  return {
	  options: {
	    dirs: [yeoman.dist]
	  },
	  html: [yeoman.dist + '/{,*/}*.html'],
	  css: [yeoman.dist + '/css/{,*/}*.css']
	}
};