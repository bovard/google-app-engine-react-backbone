var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    reactify = require('reactify'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('browserify', function() {
    return gulp.src('client/main.jsx')
        .pipe(browserify({
            debug: true,
            transform: [reactify],
            extensions: [".html",".jsx"]
        }).on('error', function(e){ console.warn("THE ERRORZ"); console.warn(e); }))
        .pipe(rename('main.js'))
        .pipe(gulp.dest('server/build/'));
});

gulp.task('release', function() {
    return gulp.src('client/main.jsx')
        .pipe(browserify({
            debug: true,
            transform: [reactify],
            extensions: [".html",".jsx"]
        }).on('error', function(e){ console.warn("THE ERRORZ"); console.warn(e); }))
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
