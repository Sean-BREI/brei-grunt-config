module.exports = function (grunt, options) {
	var yeoman = options.yeoman;
	return {
		ngAnnotate: {
			options: {
				singleQuotes: true
			}
		},
		app: {
			files: {
				'app/js/angular/min-safe/app.js': [yeoman.app + '/js/angular/*.js'],
				'app/js/angular/min-safe/controllers.js': [yeoman.app + '/js/angular/controllers/*.js'],
				'app/js/angular/min-safe/directives.js': [yeoman.app + '/js/angular/directives/*.js'],
				'app/js/angular/min-safe/filters.js': [yeoman.app + '/js/angular/filters/*.js'],
				'app/js/angular/min-safe/services.js': [yeoman.app + '/js/angular/services/*.js']
			}
		}
	};
};