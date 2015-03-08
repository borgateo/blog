Matteo Borgato Blog
========

A medium inspired Jekyll blog theme. The basic idea came from the Ghost theme 
[Readium 2.0](http://www.svenread.com/readium-ghost-theme/)

Configuration
-----

The main settings happen in side of the _config.yml file:

### Site

Main settings for the site 

* **title**: name of your site
* **description**: description of your site
* **logo**: small logo for the site (300px * 300px)
* **cover**: large background image on the index page 
* **name**: name site owner
* **email**: mail address of the site owner
* **author**: author name
* **author_image**: small image of author (300px * 300px)
 
### Social 

The template allows to add all major social plattforms to your site.
Fill the the form for each plattform. If you leave the share_* entries empty, the sharing buttons below a post are not shown.  

* **icon**:	name of social plattform (must match a name of [font-awsome](http://fortawesome.github.io/Font-Awesome/) icon set )
* **url**:	url of your account
* **desc**: slogan of the plattform
* **share_url**: share url
* **share_title**: first part of url for the title
* **share_link**: second part of the share url for the link to the post

The Liquid template engine will magical combine the different parts to a share url. 

```
http://twitter.com/share?text=post_title&amp;url=post_url
````

