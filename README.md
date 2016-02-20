Matteo Borgato Blog
========

A medium inspired Jekyll blog theme. The basic idea came from the Ghost theme 
[Readium 2.0](http://www.svenread.com/readium-ghost-theme/)

Configuration
-----

The main settings happen inside of the _config.yml 

## Commands - development

Watch changes - browser-sync:

`$ gulp` 

Jekyll server:

`$ jekyll serve` 

Then visit `http://localhost:4000/`


## Publish website

Build the assets:

`$ gulp build`


Build Jekyll views:

`$ jekyll build`


Publish to S3:

`$ s3_website push`