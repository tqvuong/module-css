const browserSync = require('browser-sync').create();
const del = require('del');
const path = require('path');

const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require("gulp-babel");


/*Create destination folder*/
const dir = {
	source: 'source',
	public: 'public',
};


// Task copy
// gulp.task('copy', function() {
// 	return gulp.src([
// 		dir.src + '/{,*/}*.html',
// 		dir.src + '/themes/**/*.css',
// 		], {
// 			base: dir.src,
// 		})
// 		.pipe(gulp.dest(dir.public));
// });


// Task clean
// gulp.task('clean', function(done) {
// 	del([
// 		dir.public
// 	], done)
// });



/*Task style*/
gulp.task('style', function() {
	return gulp.src([path.join(dir.source, '/style/**/*.scss')])
        .pipe(sass())
        .pipe(gulp.dest('source/src/css'))
		.pipe(browserSync.stream());
	}
);


/*Task transpile to es5*/
// gulp.task('es5', () => {
// 	return gulp.src([
// 		dir.source + '/js/**/*.js'
// 		])
// 		.pipe(babel({
// 			presets: ['es2015']
// 		}))
// 		.pipe(gulp.dest(dir.source + '/src/js'));
// 	}
// );


/*Task copy script*/
gulp.task('script', function() {
	return gulp.src([
		dir.source + '/js/**/*.js',
		], {
			base: dir.source,
		})
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest(dir.source + '/src'))
		.pipe(browserSync.stream());
	}
);


/*Task serve*/
gulp.task('serve', ['style'], function() {
	browserSync.init({
		notify: true,
		port: 8000,
		server: path.join(dir.source, 'src'),
	});

	gulp.watch(path.join(dir.source, '/style/**/*.scss'), ['style']);
	gulp.watch(path.join(dir.source, '/js/**/*.js'), ['script']);
	gulp.watch([
		path.join(dir.source, 'src/**/*.html'),
		path.join(dir.source, '/style/**/*.scss'),
		path.join(dir.source, '/js/**/*.js'),
	]).on('change', browserSync.reload);
});


gulp.task('default', ['serve']);
