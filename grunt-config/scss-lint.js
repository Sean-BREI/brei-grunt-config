module.exports = function(grunt, options){
  var yeoman = options.yeoman;
  return {
    allFiles: [
      'scss/**/*.scss',
    ],
    options: {
      bundleExec: true,
      config: '.scss-lint.yml',
      reporterOutput: 'scss-lint-report.xml',
      colorizeOutput: true
    },
  };
};
