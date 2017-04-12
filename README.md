![Travis](https://travis-ci.org/borteo/blog.svg?branch=master)

Matteo Borgato Blog
========

A medium inspired Jekyll blog theme. The basic idea came from the Ghost theme 
[Readium 2.0](http://www.svenread.com/readium-ghost-theme/)


Features
-----

### General features:

  - Vanilla Javascript `🍦`
  - Browserify
  - npm
  - Sass + Bourbon
  - Gulp.js
  - Jekyll
  - Ruby
  - Dropbox as a Database (JSON files - WIP)

#### Ruby gems:
  - Redcarpet (Markdown parser)
  - s3_website (push generated `_site` folder to S3)


Configuration
-----

The main settings happen inside of the _config.yml 


### Prerequisites

Ruby 2.2.3, rubygem and npm are required:

`rbenv local 2.2.3`
`gem install bundle`
`bundle install`
`npm i`

### Commands - development

Watch changes - browser-sync:

`$ npm run start`

Then visit `http://localhost:4000/`


### Build assets and `_site` folder:

`$ npm run build`


### Publish website

`$ npm run deploy`


TODO:
-----------

- Gzip js and deflate CSS using gulp-pako
- automate gzipped assets deployment to S3


[![forthebadge](http://forthebadge.com/images/badges/made-with-crayons.svg)](http://forthebadge.com)
