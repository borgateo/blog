Matteo Borgato Blog
========

A medium inspired Jekyll blog theme. The basic idea came from the Ghost theme 
[Readium 2.0](http://www.svenread.com/readium-ghost-theme/)


Features
-----

General features:

  - Ruby
  - Jekyll
  - Zepto.js
  - Sass + Bourbon
  - Gulp.js
  - Browserify
  - npm

Ruby gems:
  - Redcarpet (Markdown parser)
  - s3_website (push generated `_site` folder to S3)

Configuration
-----

The main settings happen inside of the _config.yml 

## Commands - development

Watch changes - browser-sync:

`$ npm run start`

Then visit `http://localhost:4000/`


## Build assets and `_site` folder:

`$ npm run build`


## Publish website

`$ npm run deploy`


TODO:
-----------

- Gzip js and deflate CSS using gulp-pako
- automate gzipped assets deployment to S3
- Move images to DB

