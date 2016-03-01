// Required packages
const gulp    = require('gulp'),
      concat  = require('gulp-concat'),
      sass    = require('gulp-sass'),
      autoFix = require('gulp-autoprefixer');
      child   = require('child_process'),
      gutil   = require('gulp-util'),
      bSync   = require('browser-sync').create();

// Location variables
const siteRoot = '_site';
const cssFiles = '_sass/**/*.?(s)css';

// CSS, Sass Concat
gulp.task('css', function() {
  gulp.src(cssFiles)
    .pipe(sass())
    .pipe(concat('all.css'))
    .pipe(gulp.dest('_site/css/'))
});

// Jekyll build command
gulp.task('jekyll', function() {
  const jekyll = child.spawn('jekyll', ['build',
                                        '--watch',
                                        '--incremental',
                                        '--drafts'
                                        ]);
  // Util logs during build
  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };
  
  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

// Browser sync init
gulp.task('serve', function() {
  bSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });
  gulp.watch(cssFiles, ['css']);
});

gulp.task('default', ['css', 'jekyll', 'serve']);