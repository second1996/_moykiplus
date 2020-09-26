document.addEventListener("DOMContentLoaded", function() {

	/**
	 * Mega Menu Brands slider
	 */
	$('.mega-menu .brands-slider').each(function(index, element){
		$(element).addClass('brands-slider-' + index)
		var mmBrands = new Swiper('.brands-slider-' + index + ' .brands-slider-container', {
			observer: true,
			observeParents: true,
			watchSlidesVisibility: true,
			loop: false,
			slidesPerView: 4,
			spaceBetween: 18,
			navigation: {
				nextEl: '.brands-slider-' + index +' .swiper-button-next',
				prevEl: '.brands-slider-' + index +' .swiper-button-prev',
			},
		})
	})

	/**
	 * Home Banner slider
	 */
	var hBanner = new Swiper('.h-banner .h-banner-slider-container', {
		allowTouchMove: false,
		loop: false,
		speed: 750,
		slidesPerView: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: '.h-banner-slider .swiper-button-next',
			prevEl: '.h-banner-slider .swiper-button-prev',
		},
		pagination: {
			el: '.h-banner-slider .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	})

})