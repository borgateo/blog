/*
** templates.js
**
** Mustache tpl
*/

var books = [
	'<h2 class="section-title centered">Libri</h2>',
    '<div class="h-scrollable">',
      '<ul>',
        '{{ #books }}',
          '<li class="book">',
            '<div class="details">',
              '<h3 class="title centered"><a href="{{ link }}" target="_blank">{{ id }}</a></h3>',
              '<p class="author centered">{{ author }}</p>',
              '{{ ^is-read }}',
                '<div class="item-status" title="pagine lette">',
                  '@ &nbsp;',
                  '{{ status }}',
                '</div>',
              '{{ /is-read }}',
            '</div>',
            '<div class="cover">',
              '<div class="review">',
                '<div class="close-review">',
                  '<i class="fa fa-times"></i>',
                '</div>',
                '<p>',
                  '{{ #is-audio }}',
                    '<span class="fa fa-headphones"></span>',
                    'Audiolibro',
                  '{{ /is-audio }}',
                '</p>',
                '<p>',
                  '{{ review }}',
                '</p>',
              '</div>',
              '<a class="open-review">',
                '<i class="fa fa-search fa-5x"></i>',
              '</a>',
              '<img class="img-cover" src="/assets/images/loader.svg" data-src="{{ cover }}"/>',
            '</div>',
            '<div class="date centered">',
              '<span class="fa fa-eye"></span>',
              '<span>{{ date }}</span>',
            '</div>',
            '<div class="stars centered">',
            	'{{ stars }} / 5',
            '</div>',
          '</li>',
        '{{ /books }}',
      '</ul>',
    '</div>'
].join('\n');

var films = [
  '<h2 class="section-title centered">Film</h2>',
	'<div class="h-scrollable">',
		'<ul>',
			'{{ #films }}',
				'<li class="film">',
					'<div class="details">',
						'<h3 class="title centered">{{ title }}</h3>',
						'<p class="author centered">{{ director }}</p>',
					'</div>',

					'<div class="cover">',
						'<div class="review">',
							'<div class="close-review">',
								'<i class="fa fa-times"></i>',
							'</div>',
							'{{ review }}',
						'</div>',

						'<a class="open-review">',
							'<i class="fa fa-search fa-5x"></i>',
						'</a>',

						'<img ',
							'class="img-cover" ',
							'src="/assets/images/loader.svg"',
							'data-src="{{ cover }}"',
						'/>',
					'</div>',

					'<div class="date centered">',
						'<span class="fa fa-eye"></span>',
						'<span>{{ date }}</span>',
					'</div>',
					'<div class="stars centered">',
						'{{ stars }} / 5',
					'</div>',
				'</li>',
			'{{ /films }}',
		'</ul>',
	'</div>'
].join('\n');

module.exports = {
	books: books,
  films: films
};
 
