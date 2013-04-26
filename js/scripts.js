$('#top img').click(function() {
	$img = $(this);
	var country_clicked_id = $img.parent().attr('id');
	var country_clicked = country_clicked_id.substr(0,3);

	$('#' + country_clicked + '_nav').prev().hide().next().find('ul').fadeIn();
});

$(window).on('load hashchange', function() {
	load_page();
});

$content = $("#content");
$sub = $("#subpage");
var load_page = function() {
	var hash = window.location.hash;
	$content.hide();
	$sub.text('');
	if(hash.length > 1) {
		var requested_page = hash.substr(1);

		$.get('information/' + requested_page + '.html', function(response) {
			// $sub.text($html.find('h2').text());
			$content.html(response);
			$content.fadeIn();

			$sub.text($content.find('h2').text());
		});
	}
}