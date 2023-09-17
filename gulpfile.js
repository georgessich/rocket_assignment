const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
function compileSass() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
}
function compileJS() {
  return gulp.src('js/**/*.js') // Путь к вашим JavaScript-файлам
    .pipe(concat('scripts.js')) // Название конечного файла
    .pipe(gulp.dest('js')) // Путь для сохранения объединенного файла
    .pipe(browserSync.stream());
}

function serve() {
  browserSync.init({
    server: './',
  });
  gulp.watch('scss/**/*.scss', compileSass);
  gulp.watch('js/**/*.js', compileJS); 
  gulp.watch('index.html').on('change', browserSync.reload);
}

gulp.task('default', gulp.series(compileSass, compileJS, serve));