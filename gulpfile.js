var gulp = require('gulp');
var rename = require("gulp-rename");
var browserify = require('gulp-browserify');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var util = require('gulp-util');

/**************************************************/
/* Build into distributable, development versions */
/**************************************************/

// gulp.task('build', ['build-es6-js', 'build-style']);
gulp.task('build', ['build-es6-js']);

gulp.task('build-es6-js', function() {
	gulp.src('./index.es6.js')
		.pipe(browserify({transform: ['babelify']}))
		.on('error', function(err) { console.log(err); util.beep(); this.emit('end'); })
		.pipe(rename('index.js'))
		.pipe(gulp.dest('./public/assets/js'))
		.pipe(rename('index.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./public/assets/js'));
});

// gulp.task('build-style', function() {
// 	gulp.src('./app/app.scss')
// 		.pipe(sourcemaps.init())
// 		// .pipe(sass({errLogToConsole: true, outputStyle: 'compact'}).on('error', sass.logError))
// 		.pipe(sass({errLogToConsole: true, outputStyle: 'compressed'}).on('error', sass.logError))
// 		.pipe(rename('distributable.min.css'))
// 		.pipe(sourcemaps.write())
// 		.pipe(gulp.dest("./build/"));
// });

/********************************************/
/* Build then Watch for changes and rebuild */
/********************************************/

gulp.task('watch', ['build'], function() {
	gulp.watch([
		'./index.es6.js'
	], ['build-es6-js']);
});

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});
