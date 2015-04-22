module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        runnerPort: 3001,
        singleRun: true,
        browsers: ['PhantomJS'],
        logLevel: 'ERROR'
      }
    },
    jasmine: {
      test: {
        src: 'src/*.js',
        options: {
            specs: 'specs/*.spec.js',
            vendor: [
              'bower_components/jquery/dist/jquery.js',
              'bower_components/angular/angular.js',
              'bower_components/angular-mocks/angular-mocks.js',
              'bower_components/chartist/dist/chartist.js'
            ]
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-karma');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'jasmine']);
  grunt.registerTask('test', ['karma']);

};
