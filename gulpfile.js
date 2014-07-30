var gulp = require("gulp");

gulp.task('default', function () {
    return gulp.src("lib/**/*.js")
        .pipe(gulp.dest("dist"));
});
