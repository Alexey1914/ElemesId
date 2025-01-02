import gulp from 'gulp';

import { path } from './gulp/comfig/path.js';
import { plugins } from './gulp/comfig/plugins.js';

global.app = {
   path: path,
   gulp: gulp,
   plugins: plugins
}

import { reset } from './gulp/tasks/reset.js';
import { copy } from './gulp/tasks/copy.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { fonts } from './gulp/tasks/fonts.js';

function watcher() {
   gulp.watch(path.watch.files, copy);
   gulp.watch(path.watch.html, html);
   gulp.watch(path.watch.scss, scss);
   gulp.watch(path.watch.js, js);
   gulp.watch(path.watch.images, images);
};
const mainTasks = gulp.parallel(copy, images, fonts, html, scss, js);
const dev = gulp.series(reset, mainTasks, watcher);

gulp.task('default', dev);