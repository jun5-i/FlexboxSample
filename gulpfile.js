var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');

gulp.task('sass', function() {
  gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./styles'));
});

gulp.task('watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('webpack',function(){
  gulp.src('./scripts/lib/export.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./scripts'))
});