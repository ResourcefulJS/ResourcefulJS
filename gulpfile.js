var gulp = require("gulp");

gulp.task('build', function () {
    return gulp.src("lib/**/*.js")
        .pipe(gulp.dest("dist"));
});

gulp.task('default', ["build"]);
