const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
function compileSass() {
  return gulp.src('scss/**/*.scss') 
    .pipe(sass())
    .pipe(gulp.dest('css')) 
    .pipe(browserSync.stream()); 
}
function serve() {
  browserSync.init({
    server: './',
  });
  gulp.watch('scss/**/*.scss', compileSass);
  gulp.watch('index.html').on('change', browserSync.reload);
}

gulp.task('default', gulp.series(compileSass, serve));