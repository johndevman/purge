const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

function build() {
  return gulp.src('./css/main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css/dist'));
}

exports.default = build;
