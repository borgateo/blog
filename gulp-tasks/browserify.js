var gulp       = require('gulp');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

gulp.task('browserify-main', function() {
    return browserify({ 
      entries: [
        '_assets/javascript/main.js'
      ] 
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('assets/js/')
  );
});

gulp.task('browserify-post', function() {
    return browserify({ 
      entries: [
        '_assets/javascript/post.js'
      ] 
    })
    .bundle()
    .pipe(source('post.js'))
    .pipe(gulp.dest('assets/js/')
  );
});

gulp.task('browserify-review', function() {
    return browserify({ 
      entries: [
        '_assets/javascript/review.js'
      ] 
    })
    .bundle()
    .pipe(source('review.js'))
    .pipe(gulp.dest('assets/js/')
  );
});

gulp.task('browserify', [
  'browserify-main', 
  'browserify-post', 
  'browserify-review'
]);