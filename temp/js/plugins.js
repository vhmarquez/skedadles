// Avoid `console` errors in browsers that lack a console.
(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

// Place any jQuery/helper plugins in here.
$('.overlay, .panel-left').on('swipeleft',function (e){
	$('#application').removeClass('active-menu');
	$('.menu-icon').children('i').toggleClass('click-fadein');
	$('.menu-icon').children('i').toggleClass('click-fadeout');
});

$('#panelRight').on('swiperight',function(e,data){
	$('#application').addClass('active-menu');
	$('.menu-icon').children('i').toggleClass('click-fadein');
	$('.menu-icon').children('i').toggleClass('click-fadeout');
});