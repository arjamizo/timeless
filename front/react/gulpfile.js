var gulp = require('gulp');

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');


gulp.task('watch', ['build'], function () {
  gulp.watch('./src/**/*.js', ['build']);
});


gulp.task('build', function () {
  browserify('./src/app.js')
    .transform(babelify)
    .bundle()
    .on('error', console.log)
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('../static/js/'));
});


gulp.task('default', ['build']);