export const fonts = () => {
   return app.gulp.src(app.path.src.fonts, { sourcemaps: true })
      .pipe(app.gulp.dest(app.path.build.fonts))
}