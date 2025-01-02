import fileinclude from "gulp-file-include";
export const html = () => {
   return app.gulp.src(app.path.src.html)
      .pipe(fileinclude())
      .pipe(app.plugins.replace(/@img\//g, 'img/'))
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: "HTML",
            message: "Error: <%= error.message%>"
         })
      ))
      .pipe(app.gulp.dest(app.path.build.html))
}