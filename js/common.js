$(document).ready(function() {

    $(".auth_buttons").click(function() {
		$(this).next().slideToggle();
	});
	$(".main_mnu_button").click(function() {
		$(".maian_mnu ul").slideToggle();
	});
	$(".h_phones_button").click(function() {
		$(".h-phone ul").slideToggle();
	});
	
	
});

