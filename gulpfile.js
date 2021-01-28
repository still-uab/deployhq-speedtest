const {src, dest, watch, parallel, series} = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// Combine and minify scripts
function jsTasks(cb) {
    src('js/*.js')
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(dest('dist/js'));
    cb();
}

// Export tasks to be used as gulp commands
exports.jsTasks = jsTasks;

exports.default = series(jsTasks);
