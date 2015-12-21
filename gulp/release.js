'use strict';

var gulp = require('gulp');
var scp = require('gulp-scp2');

module.exports = function (options) {
    /**
     * Release
     */
    gulp.task('release', ['build:dist'], function () {
        return gulp.src(options.dist + '/**/*')
            .pipe(scp({
                host:         'dev.jazzy.pro',
                username:     'lukasz.salajczyk',
                dest:         '/var/www/vhosts/luq/bubbletask/',
                agent:        process.env["SSH_AUTH_SOCK"],
                agentForward: true
            }))
            .on('write', function (object) {
                console.log(object);
            })
            .on('error', function (err) {
                console.log(err);
            });
    });
};

