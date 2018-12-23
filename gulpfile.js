"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();


gulp.task('css', function() {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("sprite", function() {
  return gulp.src("source/img/*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(gulp.dest("source/img"));
});

gulp.task("server", function() {
  server.init({
    server: "source/"
  });
  gulp.watch("source/**/*.less", gulp.series("css"))
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("start", gulp.series( "server"));
