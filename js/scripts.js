$(document).ready(function() {

});

$('#top img').click(function() {
	$img = $(this);
	var country_clicked_id = $img.parent().attr('id');
	var country_clicked = country_clicked_id.substr(0,3);

	$('#' + country_clicked + '_nav').prev().hide().next().find('ul').fadeIn();
});

$('.navigation a').click(function() {
	$a = $(this);
	$content = $("#content");

	var requested_page = $a.attr('href').substr(1);

	$content.hide();
	$.get('information/' + requested_page + '.html', function(response) {
		$content.html(response);
		$content.fadeIn();
	});
})