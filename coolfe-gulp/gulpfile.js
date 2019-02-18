const gulp  = require('gulp');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;


function handleError(err) {
  console.log(err.toString());
  this.emit("end");
}

gulp.task('less', function() {
    return gulp
        .src('./*.less')
        .pipe(less())
        .on('error', handleError)
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.stream())
})

gulp.task('copy', function() {
    return gulp
    .src('./index.html')
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream())
})

gulp.task('imagemin', function() {
    return gulp
    .src('./img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/'))
})

gulp.task('html-watch', gulp.series('copy'), function (done) {
    reload();
    done();
});

gulp.task('less-watch', gulp.series('less'), function (done) {
    reload();
    done();
});


gulp.task('serve', function() {
  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  })
    gulp.watch("*.html").on("change", gulp.series('html-watch'))
    gulp.watch("*.less").on("change", gulp.series('less-watch'))
});

gulp.task('default', gulp.series('imagemin','serve'));