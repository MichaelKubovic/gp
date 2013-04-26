$(document).ready(function() {
	var hash = window.location.hash;
	if(hash.length > 0) {
		var requested_page = hash.substr(1);
		load_page(requested_page);
	}
});

$('#top img').click(function() {
	$img = $(this);
	var country_clicked_id = $img.parent().attr('id');
	var country_clicked = country_clicked_id.substr(0,3);

	$('#' + country_clicked + '_nav').prev().hide().next().find('ul').fadeIn();
});

$('.navigation a').click(function() {
	$a = $(this);

	var requested_page = $a.attr('href').substr(1);
	load_page(requested_page);
});

$content = $("#content");
var load_page = function(requested_page) {
	$content.hide();
	$.get('information/' + requested_page + '.html', function(response) {
		$content.html(response);
		$content.fadeIn();
	});
}