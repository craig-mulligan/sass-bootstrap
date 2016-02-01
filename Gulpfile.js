var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');

gulp.task('styles', function() {
    gulp.src('static/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifycss())
        .pipe(gulp.dest('static/styles'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('static/styles/*.scss',['styles']);
});
