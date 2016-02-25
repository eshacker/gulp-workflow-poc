var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
  console.log('default gulp task is running.');
});

gulp.task('compress', function(){
  return gulp.src('src/js/*.js')
          .pipe(uglify())
          .pipe(gulp.dest('dist/js'));
});
