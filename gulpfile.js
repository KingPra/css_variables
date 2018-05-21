const gulp = require('gulp');
const browser = require('gulp-browser');
const strip = require('gulp-strip-comments');

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', () => {
  return gulp.src('*.html')
  .pipe(strip())
  .pipe(gulp.dest('docs/'));
});

gulp.task('css', () => {
  return gulp.src('*.css')
  .pipe(strip.text())
  .pipe(gulp.dest('docs/'));
});

gulp.task('js', () => {
  return gulp.src('*.js')
  .pipe(browser.browserify())
  .pipe(strip())
  .pipe(gulp.dest('docs/'));
});

gulp.task('watch', ['default'], () => {
  gulp.watch('*.html', ['html']);
  gulp.watch('*.css', ['css']);
  gulp.watch('*.js', ['js']);
});
