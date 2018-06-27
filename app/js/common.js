$(function() {

	"use strict";

	// Mobile menu
	$(".nav").click(function() {
		$(this).toggleClass("nav-expanded");
	});

	// nav scroll
	$(".nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 100;
		$('body,html').animate({scrollTop: top}, 1000);
	});


	// Scroll Animation
	$(window).scroll(function(){
		$('.animate').each(function(i, el){
			if ($(window).scrollTop() > $(el).offset().top - $(window).height() + 100) {
				$(el).addClass('animated');
			}
		});
	});


	// scroll to .offer section
	$('.js-scroll-down').click(function(event) {
		event.preventDefault();
		$('body,html').animate({scrollTop: $("#offer").offset().top}, 1000);
	});

	// set a default color of the item in value of hidden form input
	$(document).ready(function() {
		$("#hiddenColorInput").val("Розовый");
	})

	// choose item's color in .offer section and add it in value of hidden form input
	$(".color-checkbox").click(function() {
		var $input = $(this);
		$(".color-checkbox").removeAttr("checked").eq($input.closest('.checkbox').index()).attr("checked", "");
		$("#hiddenColorInput").val($input.data("color"));
		$(".offer__item").hide().eq($input.closest('.checkbox').index()).fadeIn("normal");
	});


	// advantages horizontal tabs
	$(".advantages__item").click(function() {
		$(".advantages__items").hide();
		$(".accordion").addClass("accordion--open");
		$(".accordion__item").eq($(this).index()).addClass("active");
		if( $(this).index() % 2 ) {
			$(".accordion__body").addClass("bg-color-1");
		} else {
			$(".accordion__body").addClass("bg-color-2");
		}
	});

	$(".accordion-close").click(function() {
		$(".accordion").removeClass("accordion--open");
		$(".accordion__item").removeClass("active");
		$(".advantages__items").fadeIn("normal");
	});


	$(".accordion__heading").on("click", function() {
		$(this).parent(".accordion__item").addClass("active").siblings().removeClass("active");
		if( $(this).parent(".accordion__item").index() % 2 ) {
			$(".accordion__body").removeClass("bg-color-2");
			$(".accordion__body").addClass("bg-color-1");
		} else {
			$(".accordion__body").removeClass("bg-color-1");
			$(".accordion__body").addClass("bg-color-2");
		}
		if($(window).width() < 1200) {
			$('body,html').scrollTop($(this).parent(".accordion__item").offset().top-70);
		}
	  });


	 // Video
	$(document).on('click','.videoPoster',function(e) {
		e.preventDefault();
		var poster = $(this);
		var wrapper = poster.closest('.video');
		videoPlay(wrapper);
	});
	function videoPlay(wrapper) {
		var iframe = wrapper.find('.relation-video');
		var src = iframe.data('src') + '&autoplay=1';
		wrapper.addClass('video--active');
		iframe.attr('src',src);
	}

	// modal form call
	$('.offer__btn-wrap').magnificPopup({
		items: {
			src: '#modal-form',
			type: 'inline'
		}
	  });

	  $(".js-scroll-anchor").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

});
