'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass({includePaths: ['node_modules'], outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist'));
});
