(function($) {

$(document).ready(function() {
   'use strict';


   	var windowHeight = $(window).height();
	var windowWidth = $(window).width();

  setTimeout(function(){
    $('#stalk').css('opacity', '1');
  }, 1000);

	$(".variation").click(function(){
		var url = $(this).attr("data-url");
		window.open(url, "_self");
	});

	$(".demo .variation").each(function() {
		var f = "./images/";
		var i = $(".demo .variation").index(this) + 1;
		$(this).css("background-image", "url("+f+i+".jpg)");
	});


	var c = $(".demo .variation").length;
	$(".demo .variation").hover(function(e){

		if (windowWidth > 768) {
			$(this).siblings().css("width", "45%");
			$(this).css("width", "55%");
		}

	}, function(){

		if (windowWidth > 768) {
			$(".demo .variation").css("width", 100/c + "%");
		}

	});

});


$(window).load(function() {

	fixSizes();
	$(".loader").delay(1000).fadeOut('slow');

});


$(window).resize(function() {

	fixSizes();

});

function fixSizes() {

	var windowHeight = $(window).height();
	var windowWidth = $(window).width();

	$(".fullscreen").css('height', windowHeight);
	var c = $(".demo .variation").length;

	if (windowWidth > 768) {

		$(".demo .variation").css('width', 100/c + '%');
		$(".demo .variation").css('height', windowHeight);

	} else {

		$(".demo .variation").css('height', windowHeight/c + 'px');
		$(".demo .variation").css('width', windowWidth);

	}

	$(".demo .variation .inner").each(function() {
		$(this).css('margin-top', ($(".demo .variation").height() - $(this).height()) / 2);
	});

}
}(jQuery));