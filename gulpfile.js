var gulp = require('gulp'),
    browserify = require('browserify'),
    transform = require('vinyl-transform'),
    reactify = require('reactify'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');


gulp.task('browserify', function () {
  var browserified = transform(function(filename) {
    var b = browserify({
            entries: [filename],
            debug: true,
            transform: [reactify],
            extensions: [".html",".jsx"]
        });
    return b.bundle();
  });

  return gulp.src(['client/main.jsx'])
    .pipe(browserified)
    .pipe(uglify())
    .pipe(rename('main.js'))
    .pipe(gulp.dest('server/build/'));
});

gulp.task('release', function () {
  var browserified = transform(function(filename) {
    var b = browserify({
            entries: [filename],
            debug: true,
            transform: [reactify],
            extensions: [".html",".jsx"]
        });
    return b.bundle();
  });

  return gulp.src(['client/main.jsx'])
    .pipe(browserified)
    .pipe(uglify())
    .pipe(rename('main.js'))
    .pipe(gulp.dest('server/build/'));
});

gulp.task('watch', function() {
    gulp.watch(["client/**"], ["browserify"]);
});

gulp.task('default', ["browserify", "watch"]);

gulp.on('error', function(){
    console.log('error');
});
