module.exports = function(grunt, options){
  var yeoman = require(yeoman);
  return {
	  options: {
	    dest: yeoman.dist
	  },
	  html: yeoman.app + '/index.html'
	}
};