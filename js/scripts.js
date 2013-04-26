$(document).ready(function() {

});

$('#top img').click(function() {
	$img = $(this);
	var country_clicked_id = $img.parent().attr('id');
	var country_clicked = country_clicked_id.substr(0,3);

	$('#' + country_clicked + '_nav').prev().hide().next().find('ul').fadeIn();
});