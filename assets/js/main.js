(function ($) {
"use strict";

// meanmenu
$('.main_menu').meanmenu({
	meanMenuContainer: '.mobile_menu',
	meanScreenWidth: "1399"
});

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 200) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

//mobile side menu
$('.side-toggle').on('click', function () {
	$('.side-info').addClass('info-open');
	$('.offcanvas-overlay').addClass('overlay-open');
})

$('.side-info-close,.offcanvas-overlay').on('click', function () {
	$('.side-info').removeClass('info-open');
	$('.offcanvas-overlay').removeClass('overlay-open');
});


let menutoggole = document.querySelector(".toggle_menu"); 
let mobilemenu = document.querySelector(".mobile_menu"); 
	menutoggole.onclick = function() {
		menutoggole.classList.toggle('active')
		mobilemenu.classList.toggle('active')
	}


let darktoggle = document.querySelector(".dark-btn-icon");

darktoggle.onclick = function() {
	document.body.classList.toggle("dark-theme");

	if(document.body.classList.contains("dark-theme")) {
		darktoggle.src = "assets/img/icon/mon-icon.png";
	}else {
		darktoggle.src = "assets/img/icon/sun-icon.png";
	}
}


//  client

if (jQuery(".client_slide_active").length > 0) {
	let acooterbrand = new Swiper('.client_slide_active', {
		slidesPerView: 4,
		loop: true,
		rtl: false,
		infinite: true,
		autoplay: {
		delay: 4000,
			},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			480: {
			slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
		}

});}


















function sliderActive() {
	/*------------------------------------
	Slider
	--------------------------------------*/
	if (jQuery(".banner_1_slider_active").length > 0) {
		let sliderActive1 = '.banner_1_slider_active';
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			rtl: false,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,

			autoplay: {
				delay: 500000,
			},

			// If we need pagination
	        pagination: {
				el: ".banner_1_slider_pagination",
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: '.slider-swiper-next',
				prevEl: '.slider-swiper-prev',
			},

			a11y: false
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + ' [data-animation]').each(function () {
					let anim = $(this).data('animation');
					let delay = $(this).data('delay');
					let duration = $(this).data('duration');

					$(this).removeClass('anim' + anim)
						.addClass(anim + ' animated')
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration
						})
						.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
							$(this).removeClass(anim + ' animated');
						});
				});
			};
			animated();
			// Make animated when slide change
			init.on('slideChange', function () {
				$(sliderActive1 + ' [data-animation]').removeClass('animated');
			});
			init.on('slideChange', animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}}

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});
/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});

$('.has-nice-select, .contact-form select').niceSelect();
// data background
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})
// data width
$("[data-width]").each(function(){
	$(this).css("width",$(this).attr("data-width"))
})
// data background color
$("[data-bg-color]").each(function(){
	$(this).css("background-color",$(this).attr("data-bg-color"))
})
//for menu active class
$('.portfolio_nav button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// testimonial active thumb slider
var testimonialControl = new Swiper(".sg-testimonial-active-control", {
	loop: true,
	spaceBetween: 0,
	slidesPerView: 1,
	freeMode: true,
	autoplay: true,
	watchSlidesProgress: true,
});

var testimonialControlMain = new Swiper(".sg-testimonial-active-main", {
	loop: true,
	spaceBetween: 0,
	navigation: {
		nextEl: ".sg-testimonial-next",
		prevEl: ".sg-testimonial-prev",
	},
	thumbs: {
		swiper: testimonialControl,
	},
});


// brand active 
const brandActive = new Swiper(".brand-active", {
	slidesPerView: 5,
	spaceBetween: 30,
	centeredSlides: true,
	loop: true,
	navigation: {
		nextEl: ".sg-portfolio-prev",
		prevEl: ".sg-portfolio-next",
		},
		breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1199: {
			slidesPerView: 5
		}
	}
});

// team active 
const teamActive = new Swiper(".team-active", {
	slidesPerView: 2,
	spaceBetween: 30,
	loop: true,
	speed: 2000,
	autoplay: {
		delay: 3000,
	},
	navigation: {
		nextEl: ".sg-portfolio-prev",
		prevEl: ".sg-portfolio-next",
		},
		breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 2
		}
	}
});

// portfolio active another thumb active
const portfolioActive = new Swiper('.portfolio-active', {
	spaceBetween: 10,
	loop: true,
	loop: true,
	loopedSlides: 5,
	slidesPerView: 1,
	breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 1,
		},
		992: {
			slidesPerView: 1,
		},
		1199: {
			slidesPerView: 1
		}
	}
});
const portfolioThumbs = new Swiper('.portfolio-thumbs', {
	centeredSlides: true,
	slidesPerView: 'auto',
	touchRatio: 0.2,
	slideToClickedSlide: true,
	loop: true,
	slidesPerView: 5,
	navigation: {
		nextEl: '.portfolio-swiper-next',
		prevEl: '.portfolio-swiper-prev',
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 5
		}
	}
});
portfolioActive.controller.control = portfolioThumbs;
portfolioThumbs.controller.control = portfolioActive;


//   odometer
$('.about_count').appear(function (e) {
	var odo = $(".about_count");
	odo.each(function () {
		var countNumber = $(this).attr("data-count");
		$(this).html(countNumber);
	});
});

// WOW active
new WOW().init();

sliderActive();

// product quantity in cart
var productQuantity = 1;
// quantity form 
$('.single-product-quantity-box .plus').on('click', function () {
	var selectedInput = $(this).closest('.single-product-quantity-box').find('input');
	productQuantity += 1;
	selectedInput.attr('value', productQuantity);
});
$('.single-product-quantity-box .minus').on('click', function () {
	var selectedInput = $(this).closest('.single-product-quantity-box').find('input');
	productQuantity-=1;
	if(productQuantity < 1) {
		productQuantity = 1;
	}
	selectedInput.attr('value', productQuantity);
});



// InHover Active 
$('.location-common').on('mouseenter', function () {
	$(this).addClass('active').parent().siblings().find('.location-common').removeClass('active');
});

})(jQuery);