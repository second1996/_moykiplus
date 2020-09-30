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
		allowTouchMove: true,
		loop: false,
		speed: 650,
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: '.h-news-slider .swiper-button-next',
			prevEl: '.h-news-slider .swiper-button-prev',
		},
		pagination: {
			el: '.h-news-slider .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 20,
			},
			768: {
				allowTouchMove: false,
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 30,
			},
			992: {
				slidesPerView: 4,
				slidesPerGroup: 4,
				spaceBetween: 30,
			}
		}
	})

	/**
	 * Home Articles slider
	 */
	var hArticlesSlider = new Swiper('.h-articles-slider-container', {
		observer: true,
		observeParents: true,
		allowTouchMove: true,
		loop: false,
		speed: 650,
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: '.h-articles-slider .swiper-button-next',
			prevEl: '.h-articles-slider .swiper-button-prev',
		},
		pagination: {
			el: '.h-articles-slider .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 20,
			},
			768: {
				allowTouchMove: false,
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 30,
			}
		}
	})

	/**
	 * Home Testimonials slider
	 */
	var hTestimonialsSlider = new Swiper('.h-testimonials-slider-container', {
		init: false,
		observer: true,
		observeParents: true,
		allowTouchMove: true,
		loop: false,
		speed: 650,
		autoHeight: true,
		slidesPerView: 1,
		spaceBetween: 10,
		pagination: {
			el: '.h-testimonials-slider .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			992: {
				allowTouchMove: false,
				autoHeight: false,
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 30,
				pagination: false,
			}
		}
	})
	/**
	 * Read More button for Testimonial cards
	 */
	$('#testimonials-tab').on('shown.bs.tab', function() {
		hTestimonialsSlider.init()
		setTimeout(() => {
			$('.card-testimonial .text').readmore({
				embedCSS: false,
				speed: 75,
				moreLink: '<button type="button" class="read-more"><span>Читать все</span><svg class="icon icon-arrow"><use xlink:href="images/symbol-defs.svg#arrow"></use></svg></button>',
				lessLink: '<button type="button" class="read-more _toggled"><span>Спрятать</span><svg class="icon icon-arrow"><use xlink:href="images/symbol-defs.svg#arrow"></use></svg></button>',
				afterToggle: function(trigger, element, expanded) {
					hTestimonialsSlider.update()
				}
			})
		}, 50);
	})

	/**
	 * Home About Gallery slider
	 */
	var hAboutGallerySlider = new Swiper('.h-about-gallery', {
		loop: false,
		speed: 650,
		pagination: {
			el: '.h-about-gallery .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	})

	/**
	 * Home Manufacturers slider
	 */
	var hManufacturersSlider = new Swiper('.h-manufacturers-slider-container', {
		watchSlidesVisibility: true,
		allowTouchMove: true,
		loop: false,
		slidesPerView: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: '.h-manufacturers-slider .swiper-button-next',
			prevEl: '.h-manufacturers-slider .swiper-button-prev',
		},
		breakpoints: {
			576: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 20,
			},
			768: {
				allowTouchMove: true,
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 30,
			},
			992: {
				slidesPerView: 4,
				slidesPerGroup: 4,
				spaceBetween: 30,
			}
		}
	})

})