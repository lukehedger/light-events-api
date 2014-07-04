var gulp = require('gulp'),
	
	sourcemaps = require('gulp-sourcemaps'),
	coffee = require('gulp-coffee'),
	gutil = require('gulp-util'),
	
	
	browserSync = require('browser-sync');


gulp.task('coffee', function () {
	gulp.src('coffee/**/*.coffee')
		.pipe(sourcemaps.init())
		.pipe(coffee().on('error', gutil.log))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('js'))
		.pipe(browserSync.reload({stream:true, once: true}));
});




gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "./"
        },
        ports: {
        	min: 5000,
        	max: 5000
        },
        open: false, // disable automatic browser launch on server start
        notify: false // disable browser notifications
    });
});

gulp.task('default', function () {
	gulp.start('coffee');
});

gulp.task('watch', function() {
	gulp.start('browser-sync');
	gulp.watch('coffee/**/*.coffee', ['coffee']);
	
});