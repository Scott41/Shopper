var gulp = require('gulp'),
    gutil = require('gulp-util'),
    del = require('del'),
    bower = require('bower'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer-core'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    shell = require('shelljs'),

    app = {
        'all': 'app/**',
        'styles': 'app/styles/*.scss',
        'javascript': 'app/js/**/*.js',
        'images': 'app/assets/*.*',
        'nocss': ['app/**', '!app/styles/*.css']
    },

    www = {
        'all': 'www/**/*'
    },

    plugins = {
        'all': 'plugins'
    },

    platforms = {
        'all': 'platforms',
        'list': ['ios', 'android']
    };

//run for initial project setup
gulp.task('install', ['cdv-plugins-clean', 'cdv-platforms-clean', 'setup-plugins', 'add-platforms']);

gulp.task('cdv-clean', function (cb) {
    return del([www.all], cb);
});

gulp.task('cdv-plugins-clean', function (cb) {
    return del([plugins.all], cb);
});
gulp.task('cdv-platforms-clean', function (cb) {
    return del([platforms.all], cb);
});

gulp.task('add-platforms', function () {
    platforms.list.forEach(function (platform) {
        shell.exec('cordova platform add ' + platform);
    })
});

gulp.task('setup-plugins', function () {
    //TODO: add more plugins as needed
    var pluginsToAdd = [
        'org.apache.cordova.statusbar',
        'cordova-plugin-whitelist',
        'cordova-plugin-splashscreen',
        'cordova-plugin-device',
        'com.ionic.keyboard'
    ];
    var plugins = pluginsToAdd.join(' ');
    return shell.exec('ionic plugin add ' + plugins);
});

gulp.task('sass', function(done) {
  gulp.src(app.styles)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./app/styles'))
    .on('end', done);
});

gulp.task('prod-sass', function(done) {
    gulp.src(app.styles)
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./app/styles/'))
        .on('end', done);
});

gulp.task('build', ['sass'], function () {
    var processors = [
        autoprefixer({browsers: ['last 2 version']})
    ];
    gulp.src(['app/**', '!app/styles/**'])
        .pipe(gulp.dest('./www'));
    gulp.src('app/styles/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./www/styles'));
});

gulp.task('prod-build', function () {

});

gulp.task('deploy-ios', function () {
    return shell.exec('ionic run ios');
});

gulp.task('deploy-android', function () {
    return shell.exec('ionic run android');
});

gulp.task('lab', function () {
    return shell.exec('ionic serve --lab');
});

gulp.task('watch', function() {
    gulp.watch(app.nocss, ['build']);
});

gulp.task('default', ['watch', 'lab']);
