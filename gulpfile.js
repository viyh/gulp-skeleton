'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var aws = require('aws-sdk');

var css_src = './src/sass/**/*.scss';
var css_dst = './src/css';

gulp.task('default', ['sass']);

gulp.task('develop', ['sass:watch']);

gulp.task('build', ['sass']);

gulp.task('unittest', function () {});

gulp.task('inttest', function () {});

gulp.task('sass', function () {
  return gulp.src(css_src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(css_dst));
});

gulp.task('sass:watch', function () {
  gulp.watch(css_src, ['sass']);
});
