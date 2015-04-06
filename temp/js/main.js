$(document).ready(function() {

	// menu functionality
	$('.menu-icon, .overlay').on('click', function(){
		$('#application').toggleClass('active-menu');
		$('.menu-icon').children('i').toggleClass('click-fadein');
		$('.menu-icon').children('i').toggleClass('click-fadeout');
	});

	// touch gestures
	$('#overlay, #panelNav').on('swipeleft',function (e){
		$('#application').removeClass('active-menu');
		$('.menu-icon').children('i').toggleClass('click-fadein');
		$('.menu-icon').children('i').toggleClass('click-fadeout');
	});

	$('#panelContent, #panelHero').on('swiperight',function(e,data){
		$('#application').addClass('active-menu');
		$('.menu-icon').children('i').toggleClass('click-fadein');
		$('.menu-icon').children('i').toggleClass('click-fadeout');
	});

	// Typed Effect

	$('#search').focus(function(event) {
		$('.typed-wrapper').css('display', 'none');
	});

	$('#search').focusout(function(event) {
		/* Act on the event */
		if( !$(this).val() ) {
			$('.typed-wrapper').css('display', 'block');
		} else {
			$('.typed-wrapper').css('display', 'none');
		}
	});

});