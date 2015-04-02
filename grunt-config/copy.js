module.exports = function(grunt, options){
  var yeoman = require('yeoman');
  return {
    dist: {
      files: [{
        expand: true,
        dot: true,
        cwd: yeoman.app,
        dest: yeoman.dist,
        src: ['*.{ico,png,txt}',
          '.htaccess',
          'img/{,*/}*.{webp,gif}',
          'css/{,*/}*.{jpg,gif,png,webp}',
          'css/fonts/*',
          'modules/*'
        ]
      }]
    },
    deploy: {
      files: [{
        expand: true,
        dot: true,
        cwd: yeoman.dist,
        dest: yeoman.deploy,
        src: ['./**']
      }]
    },
    styles: {
      expand: true,
      dot: true,
      cwd: yeoman.app + '/css',
      dest: '.tmp/css/',
      src: '{,*/}*.css'
    }
  }
};