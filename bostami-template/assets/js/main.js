(function ($) {
"use strict";

// meanmenu
$('.main_menu').meanmenu({
	meanMenuContainer: '.mobile_menu',
	meanScreenWidth: "1399"
});

$('.main_menu_2').meanmenu({
	meanMenuContainer: '.mobile_menu_2',
	meanScreenWidth: "991"
});

$('.main_menu_3').meanmenu({
	meanMenuContainer: '.mobile_menu_3',
	meanScreenWidth: "991"
});



let menutoggole = document.querySelector(".toggle_menu"); 
let mobilemenu = document.querySelector(".mobile-menu"); 
	menutoggole.onclick = function() {
		menutoggole.classList.toggle('active')
		mobilemenu.classList.toggle('active')
	}


let darktoggle = document.querySelector(".dark-btn-icon");
let home1bgimg = document.querySelector(".page-wrapper");
let home2bgimg = document.querySelector(".page-wrapper-2");

darktoggle.onclick = function() {
	document.body.classList.toggle("dark-theme");

	if(document.body.classList.contains("dark-theme")) {
		darktoggle.src = "assets/img/icon/sun-icon.png";
		home1bgimg.style.backgroundImage = "url('assets/img/bg/page-bg-dark-1.jpg')";
		home2bgimg.style.backgroundImage = "url('assets/img/bg/page-bg-dark-2.jpg')";

	}else {
		darktoggle.src = "assets/img/icon/mon-icon.png";
		home1bgimg.style.backgroundImage = "url('assets/img/bg/page-bg-1.jpg')";
		home2bgimg.style.backgroundImage = "url('assets/img/bg/page-bg-1.jpg')";

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

let preloader = document.querySelector("#preloader");
	window.addEventListener('load', function(){
		preloader.classList.add("preloaded");
		setTimeout(function () {
            preloader.remove();
          },1500);
})

// data background
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})


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



})(jQuery);