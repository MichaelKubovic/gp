$('#top img').click(function() {
	var $img = $(this);
	var country_to_open = $img.parent().hasClass('blg') ? 'blg' : 'svk';

	$('.' + country_to_open + '.navigation').fadeIn().prev().hide();
});

$(window).on('load hashchange', function() {
	load_page();
});

var $content = $("#content");
var $sub = $("#subpage");
var requested_page;

var load_page = function() {
	var hash = window.location.hash;
	$content.hide();
	$sub.text('');
	if(hash.length > 1 && hash !== '#home') {
		requested_page = hash.substr(1);
	} else {
		requested_page = 'home';

		var hidden_flag = $("#top div:hidden");
		hidden_flag.fadeIn().next().hide();
	}

	$.get('information/' + requested_page + '.html', function(response) {
		// $sub.text($html.find('h2').text());
		$content.html(response);
		$content.fadeIn();

		$sub.text($content.find('h2').text());
	});
};