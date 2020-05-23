const gulp = require('gulp');

// Копируем все видео из папки dev в dist

module.exports = function fonts() {
  return gulp.src('dev/static/video/**/*.*')
    .pipe(gulp.dest('dist/static/video'))
};