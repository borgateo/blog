/*
** gulpfile.js
** ------------------------------------
*/
'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync');

var requireDir  = require('require-dir');
requireDir('./gulp-tasks');

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', function () {
  browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function() {
  gulp.watch('_assets/stylesheets/**/*.scss', ['sass']);
  gulp.watch('_assets/javascript/**/*.js', ['js']);
  gulp.watch(['*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);

gulp.task('build', ['sass', 'js']);
