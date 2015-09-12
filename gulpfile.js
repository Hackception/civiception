'use strict';

var gulp = require('gulp');
var del = require('del');
var bs = require('browser-sync');
var less = require('gulp-less');
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');

var globs = {
  build: 'build/',
  less: ['src/**/*.less'],
  js: ['src/**/*.js'],
  html: ['src/**/*.html', '!src/**/index.html']
};

// ====

gulp.task('default', ['clean', 'build', 'serve', 'watch']);

gulp.task('build', ['less', 'html', 'js']);

gulp.task('serve', function () {

});

gulp.task('watch', function () {

});

// ====

gulp.task('clean', function () {

});

gulp.task('less',function () {

});

gulp.task('js', function () {

});

gulp.task('html', function () {

});
