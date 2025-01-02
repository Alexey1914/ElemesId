import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
   build: {
      js: `${buildFolder}/js/`,
      css: `${buildFolder}/css/`,
      files: `${buildFolder}/files/`,
      html: `${buildFolder}/`,
      fonts: `${buildFolder}/fonts/`,
      images: `${buildFolder}/img/`,
   },
   src: {
      js: `${srcFolder}/js/*.js`,
      images: `${srcFolder}/img/**/*.{svg,jpg,png}`,
      scss: `${srcFolder}/scss/*.{scss,css}`,
      files: `${srcFolder}/files/**/*.*`,
      html: `${srcFolder}/*.html`,
      fonts: `${srcFolder}/fonts/*.{eot,svg,ttf,woff}`,
   },
   watch: {
      files: `${srcFolder}/files/**/*.*`,
      js: `${srcFolder}/js/**/*.js`,
      scss: `${srcFolder}/scss/**/*.{scss,css}`,
      html: `${srcFolder}/**/*.html`,
      images: `${srcFolder}/img/**/*.{svg,jpg,png}`,
   },
   clean: buildFolder,
   buildFolder: buildFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
   ftp: ``
}