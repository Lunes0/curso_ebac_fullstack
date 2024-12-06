const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate =require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function compressImg(){
  return gulp.src('./source/assets/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./build/assets/images'))
}

function compressJs(){
  return gulp.src('./source/scripts/*.js')
  .pipe(uglify())
  .pipe(obfuscate())
  .pipe(gulp.dest('./build/scripts'));
}

function compilaSass(){
  return gulp.src('./source/styles/main.scss').pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}


exports.default = function(){
  gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
  gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(compressImg));
  gulp.watch('./source/assets/images/*', {ignoreInitial: false}, gulp.series(compressJs));
}