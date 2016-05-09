module.exports = function (grunt, options) {
	return {
		'babel': {
			options: {
				sourceMap: false,
				plugins: [
					['transform-es5-property-mutators'],
					['transform-es2015-arrow-functions'],
					['transform-es2015-block-scoped-functions'],
					['transform-es2015-block-scoping'],
					['transform-es2015-classes'],
					['transform-es2015-computed-properties'],
					['check-es2015-constants'],
					['transform-es2015-destructuring'],
					['transform-es2015-duplicate-keys'],
					['transform-es2015-for-of'],
					['transform-es2015-function-name'],
					['transform-es2015-literals'],
					['transform-es2015-object-super'],
					['transform-es2015-parameters'],
					['transform-es2015-shorthand-properties'],
					['transform-es2015-spread'],
					['transform-es2015-sticky-regex'],
					['transform-es2015-template-literals'],
					['transform-es2015-typeof-symbol'],
					['transform-es2015-unicode-regex']
				]
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'app/es6/',
					ext: '.js',
					extDot: 'last',
					src: '**/*.js',
					dest: 'app/js/'
				}]
			}
		}
	};
};
