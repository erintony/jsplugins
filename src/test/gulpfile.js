var gulp = require('gulp');
var sass = require('gulp-sass');

var pluginName = 'loading';

gulp.task('default',function() {

    //编译sass 读取 编译 输出到新文件夹中
    gulp.task('sass',function(){
        gulp.src('../' + pluginName + '/css/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('../' + pluginName + '/out'));
    });

    //gulp.run('sass');

    gulp.task('sass:watch', function () {
        gulp.watch('../' + pluginName + '/css/*.scss', ['sass']);
    });

    gulp.watch('../' + pluginName + '/css/*.scss', ['sass']);


});