var browserify = require('browserify');
var source = require ('vinyl-source-stream');
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concatInterface', function() {
  return gulp.src(['./js/browser.js', './js/new-entry.js'])
  .pipe(concat('allConcat.js'))
  .pipe(gulp.dest('./tmp'))
})

gulp.task('build', ['concatInterface'], function(){
return browserify({entries: ['./tmp/allConcat.js'] })
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js'));
});
