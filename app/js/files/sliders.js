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

	/**
	 * Product Tab slider
	 */
	$('.tab-slider').each(function(index, element){
		$(element).addClass('tab-slider-' + index)
		var tabSlider = new Swiper('.tab-slider-' + index + ' .tab-slider-container', {
			observer: true,
			observeParents: true,
			allowTouchMove: false,
			loop: false,
			speed: 650,
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 30,
			navigation: {
				nextEl: '.tab-slider-' + index +' .swiper-button-next',
				prevEl: '.tab-slider-' + index +' .swiper-button-prev',
			},
			pagination: {
				el: '.tab-slider-' + index +' .swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
		})
	})

	/**
	 * Home News slider
	 */
	var hNewsSlider = new Swiper('.h-news-slider-container', {
		observer: true,
		observeParents: true,
		allowTouchMove: false,
		loop: false,
		speed: 650,
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 30,
		navigation: {
			nextEl: '.h-news-slider .swiper-button-next',
			prevEl: '.h-news-slider .swiper-button-prev',
		},
		pagination: {
			el: '.h-news-slider .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	})

	/**
	 * Home Articles slider
	 */
	var hArticlesSlider = new Swiper('.h-articles-slider-container', {
		observer: true,
		observeParents: true,
		allowTouchMove: false,
		loop: false,
		speed: 650,
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 30,
		navigation: {
			nextEl: '.h-articles-slider .swiper-button-next',
			prevEl: '.h-articles-slider .swiper-button-prev',
		},
		pagination: {
			el: '.h-articles-slider .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	})

	/**
	 * Home Testimonials slider
	 */
	// var hTestimonialsSlider = new Swiper('.h-testimonials-slider-container', {
	// 	observer: true,
	// 	observeParents: true,
	// 	allowTouchMove: false,
	// 	loop: false,
	// 	speed: 650,
	// 	slidesPerView: 3,
	// 	spaceBetween: 30,
	// 	navigation: {
	// 		nextEl: '.h-testimonials-slider .swiper-button-next',
	// 		prevEl: '.h-testimonials-slider .swiper-button-prev',
	// 	},
	// 	pagination: {
	// 		el: '.h-testimonials-slider .swiper-pagination',
	// 		type: 'bullets',
	// 		clickable: true,
	// 	},
	// })

	var hAboutGallerySlider = new Swiper('.h-about-gallery', {
		loop: false,
		speed: 650,
		pagination: {
			el: '.h-about-gallery .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	})

})