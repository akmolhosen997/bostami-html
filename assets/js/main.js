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


//  client slider

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


// work fillter
function enableMasonry2  () {
	// ----------------------------- isotop gallery

	$(window).on("load", function () {
	  if ($("#fillter-item-active").length) {
		var $grid = $("#fillter-item-active").isotope({
		  // options
		  itemSelector: ".isotop-item",
		  percentPosition: true,
		  masonry: {
			// use element for option
			columnWidth: ".grid-sizer",
		  },
		});

		// filter items on button click
		$(".isotop-menu-wrapper").on("click", "li", function () {
		  var filterValue = $(this).attr("data-filter");
		  $grid.isotope({ filter: filterValue });
		});

		// change is-checked class on buttons
		$(".isotop-menu-wrapper").each(function (i, buttonGroup) {
		  var $buttonGroup = $(buttonGroup);
		  $buttonGroup.on("click", "li", function () {
			$buttonGroup.find(".is-checked").removeClass("is-checked");
			$(this).addClass("is-checked");
		  });
		});
	  }
	});
}

enableMasonry2();

// blog slider
if (jQuery(".blog-slider-active").length > 0) {
	let acooterbrand = new Swiper('.blog-slider-active', {
		slidesPerView: 1,
		loop: true,
		rtl: false,
		infinite: true,
		autoplay: false,
		pagination: {
			el: ".blog-progation",
			clickable: true,
			},

});}





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



//   odometer
$('.odometer').appear(function (e) {
	var odo = $(".odometer");
	odo.each(function () {
		var countNumber = $(this).attr("data-count");
		$(this).html(countNumber);
	});
});


// WOW active
new WOW().init();




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