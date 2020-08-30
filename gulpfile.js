const gulp = require('gulp');
const sass = require('gulp-sass');
const purgecss = require('gulp-purgecss');

sass.compiler = require('node-sass');

function build() {
  return gulp.src('./css/main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(purgecss({
      content: ['./templates/**/*.html.twig']
    }))
    .pipe(gulp.dest('./css/dist'));
}

exports.default = build;
