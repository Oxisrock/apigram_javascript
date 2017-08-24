var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream')
var watchify = require('watchify')
// gulp.task son donde se van a meter la tareas
gulp.task('styles', function (){
  gulp
    .src('index.scss')
    //toma el archivo
    .pipe(sass())
    //.pipe es los pasos que debe seguir la task
    .pipe(rename('app.css'))
    //gulp rename es una libreria para renombrar archivos
    .pipe(gulp.dest('public/css'));
    //archivo procesado lo pondra en la ruta public
})

gulp.task('assets', function () {
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public'));
})

function compile(watch) {
  var bundle = watchify(browserify('./src/index.js'));
  function rebundle() {
   bundle
    .transform(babel)
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public/js'));
  }
  if (watch) {
    bundle.on('update', function () {
      console.log('--> Bundling...');
      rebundle();
    })
  }
  rebundle();
}

// gulp.task('scripts', function (){
//     .transform(babel)
//     .bundle()
//     .pipe(source('index.js'))
//     .pipe(rename('app.js'))
//     .pipe(gulp.dest('public/js'));
// })

gulp.task('build', function () {
 return compile();
});

gulp.task('watch', function () {
  return compile(true);
});

gulp.task('default', ['styles','assets','build'])
//definicion de tarea por default
