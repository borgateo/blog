var gulp        = require('gulp');
var uglify      = require('gulp-uglifyjs');
var foreach     = require('gulp-foreach');
var browserSync = require('browser-sync');

gulp.task('js', ['browserify'], function() {
  // loop on every browserify bundle file
  return gulp.src('assets/js/*.js')
    .pipe(foreach(function(stream, file) {
      return stream
        .pipe(uglify())
        .pipe(gulp.dest('_site/assets/js'));
    }))
    .pipe(browserSync.reload({stream:true}));
});
