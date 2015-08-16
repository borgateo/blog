var gulp    = require('gulp');
var sass    = require('gulp-sass');
var prefix  = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
  return gulp.src('_assets/stylesheets/**/*.scss')
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths,
      errLogToConsole: true,
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('_site/assets/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('assets/css'));
});
