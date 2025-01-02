import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
const sass = gulpSass(dartSass);
export const scss = () => {
   return app.gulp.src(app.path.src.scss, { sourcemaps: true })
      .pipe(sass())
      .pipe(groupCssMediaQueries())
      .pipe(app.plugins.replace(/@img\//g, '../img/'))
      .pipe(autoprefixer({
         grid: true,
         overrideBrowserslist: ["last 3 versions"],
         cascade: true
      }))
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.replace(/@img\//g, '../img/'))
}