module.exports = function(grunt, options){
  var yeoman = require('yeoman');
  return {
	  dist: {
	    options: {},
	    files: [{
	      expand: true,
	      cwd: yeoman.app,
	      src: '*.html',
	      dest: yeoman.dist
	    }]
	  }
	}
};