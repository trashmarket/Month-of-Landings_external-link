const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require('sass'));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const serversync = require("browser-sync").create();

// style

const style = () => {
  return gulp.src("./scss/index.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("./css"))
    .pipe(serversync.stream());
}

exports.style = style;

//server

const server = (done) => {
  serversync.init({
    server: {
      baseDir: '.'
    },
    cors: true,
    notify: false,
    ui: false,
  })
  done();
}

exports.server = server;

// watcher

const watcher = () => {
  gulp.watch("./scss/**/*.scss", gulp.series("style"));
  gulp.watch("./*.html").on("change", serversync.reload);
}

// default

exports.default = gulp.series(
  style, server, watcher
)