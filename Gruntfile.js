'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: [
        '*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    watch: {
      all: {
        files: ['<%= jshint.all %>', 'test.html'],
        tasks: ['jshint'],
        options:{
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'watch']);
};
