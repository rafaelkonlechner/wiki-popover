
var url;

function set_url(url) {
	this.url = url;
};

$(document).ready(function() {
	/**
	 * 'mw-content-text' is the HTML class attribute used for the article content.
	 */
	$('#mw-content-text a').each(function() {
		$(this).attr({
			'data-container': 'body',
			'data-toggle': 'popover',
			'data-placement': 'top',
			'data-trigger': 'manual'
		});
	});

	chrome.extension.sendMessage({text: "URLrequest"}, function(response) {
		set_url(response.url);
	});
});


$('#mw-content-text a').hover( function() {
	lookup_wiki(this);
});

/**
 * Looks up the Wikipedia article refered to by link and displays info in popover above the link.
 * @param {text/html} link - link to another wikipedia article
 */
function lookup_wiki(link) {

   /**
	* Gets site from well-formed Wikipedia url as in: [en|de|..].wikipedia.org/wiki/{site}
	* @type {string}
	* @private
	*/
	var site = $(link).attr('href');
	site = site.substr(site.lastIndexOf('/') + 1);
	
   /**
	* Gets lang (2-digit) from well-formed Wikipedia url as in: {lang}.wikipedia.org/wiki/Some_Site
	* @type {string}
	* @private
	*/
	var index = url.indexOf('//') + 2;
	var lang = url.substr(index, 2);

   /**
	* Wikipedia URL that will fetch the first section of the site provided. Unfortunately, Wikipedia lacks proper semantics (and markup). This is a real problem, 
	since you can't even query obvious things like the lead-in paragraph.
	* See: http://www.mediawiki.org/wiki/API:Main_page for details on the Web-API
	* @type {string}
	* @private
	*/
	var wikiSearch = 'http://' + lang + '.wikipedia.org/w/api.php?action=parse&page=' + site + '&format=json&prop=text&section=0'
	$.getJSON(wikiSearch, function(data) {
		var resp = data.parse.text['*'];
		var i = resp.indexOf('<p>');
		resp = resp.substr(i);
		show_popover(link, $(resp).text());
	});
};

/**
 * Looks up the Wikipedia article refered to by link and displays info in popover above the link.
 * @param {text/html} link - popover is displayed above it
 * @param {string} content - info, that will be displayed in the popover
 */
function show_popover(link, content) {
	$(link).attr('data-content', content.substr(0,120) + '...');
	$(link).popover('toggle');
}