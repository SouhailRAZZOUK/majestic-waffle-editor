var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    sass        = require('gulp-sass'),
    pug         = require('gulp-pug'),
    typescript  = require('gulp-typescript'),
    tslint      = require('gulp-tslint')
    tsl         = require("tslint"),
    imagemin    = require('gulp-imagemin'),
    del         = require('del'),
    merge       = require('merge2');

var tsProject = typescript.createProject("./tsconfig.json");

gulp.task('ts', function() {
  var tsResult = gulp.src('src/**/*.ts')
                  .pipe( tsProject());    

  return merge([
      tsResult.dts.pipe(gulp.dest('dist/definitions/')),
      tsResult.js.pipe(gulp.dest('dist/'))
    ]);
});

gulp.task('tslint', function() {
  return gulp.src('src/**/*.ts')
    .pipe( tslint({
      formatter: 'stylish'
    }))
    .pipe( tslint.report({
      emitError: false
    }))
})

gulp.task('sass', function() {
  return gulp.src('src/**/*.scss')
    .pipe( sass().on('error', sass.logError) )
    .pipe( gulp.dest('dist/') );
});

gulp.task('js', function() {
  return gulp.src('src/**/*.js')
    .pipe( gulp.dest('dist/'));
});

gulp.task('pug', function() {
return gulp.src(['src/**/*.pug', '!src/includes/**/*',])
    .pipe( pug({ pretty: true }))
    .pipe( gulp.dest('dist/'));
});

gulp.task('images', function() {
  return gulp.src(['src/**/*gif','src/**/*.jpg','src/**/*.png', 'src/**/*.ico'])
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('clean', function () {
	del(['dist/**/*', '!dist/', '!dist/bower_components', '!dist/bower_components/**/*'], {force: true}).then(paths => {
    if(paths.length != 0){
      gutil.log('Files and folders that were deleted:\n', gutil.colors.orange(paths.join('\n')));
    }
  });
});

gulp.task('watch', function () {
  
  gulp.watch('src/**/*.pug',['pug']);

  gulp.watch(['src/**/*gif','src/**/*.jpg','src/**/*.png','src/**/*.ico'],['images']);

  gulp.watch('src/**/*.scss',['sass']);

  gulp.watch('src/**/*.js',['js']);

  gulp.watch('src/**/*.ts',['ts', 'tslint']);

});

gulp.task('default', ['pug','sass', 'tslint','ts', 'js','images', 'watch']);

gulp.task('build', ['pug','sass', 'tslint','ts', 'js','images']);