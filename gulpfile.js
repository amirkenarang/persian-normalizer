var gulp = require("gulp");

var path = {
  jsonFiles: {
    src: ["./src/modules/utf8-codes/*.json"],
    dist: "./dist/modules/utf8-codes",
  },
};

gulp.task("copy", function () {
  return gulp.src(path.jsonFiles.src).pipe(gulp.dest(path.jsonFiles.dist));
});

gulp.task("default", gulp.series("copy"));
