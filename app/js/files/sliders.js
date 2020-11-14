jQuery(document).ready( function($) {

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
		// autoplay: {
		// 	delay: 5000,
		// },
		// allowTouchMove: false,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		grabCursor: true,
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
		// breakpoints: {
		// 	768: {
		// 		autoplay: false
		// 	}
		// }
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
		speed: 650,
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


	/**
	 * Promo Banner slider
	 */
	var promoBanner = new Swiper('.promo-banner .promo-banner-slider-container', {
		preloadImages: false,
		lazy: true,
		// autoHeight: true,
		loop: false,
		speed: 750,
		slidesPerView: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: '.promo-banner-slider .swiper-button-next',
			prevEl: '.promo-banner-slider .swiper-button-prev',
		},
		pagination: {
			el: '.promo-banner-slider .swiper-pagination',
			type: 'bullets',
			clickable: true,
		}
	})


	/**
	 * Compare products slider
	 */
	var compareProductsSlider = new Swiper('.compare .products-slider-container', {
		watchSlidesVisibility: true,
		allowTouchMove: true,
		mousewheel: {
			invert: true,
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false,
		},
		loop: false,
		slidesPerView: 1,
		speed: 250,
		navigation: {
			nextEl: '.compare .products-slider .swiper-button-next',
			prevEl: '.compare .products-slider .swiper-button-prev',
		},
		breakpoints: {
			768: {
				allowTouchMove: false,
				slidesPerView: 2
			},
			992: {
				slidesPerView: 3
			},
			1230: {
				slidesPerView: 4
			}
		}
	})
	var compareTableSlider = new Swiper('.compare .compare-table-values', {
		allowTouchMove: true,
		mousewheel: {
			invert: true,
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false,
		},
		loop: false,
		slidesPerView: 1,
		speed: 250,
		scrollbar: {
			el: '.compare .swiper-scrollbar',
			draggable: true,
		},
		breakpoints: {
			768: {
				allowTouchMove: false,
				slidesPerView: 2
			},
			992: {
				slidesPerView: 3
			},
			1230: {
				slidesPerView: 4
			}
		}
	})

	/**
	 * Swiper sync control sliders
	 */
	if( $('.compare .products-slider-container, .compare .compare-table-values').length ) {
		compareProductsSlider.controller.control = compareTableSlider
		compareTableSlider.controller.control = compareProductsSlider
	}


	/**
	 * Pickup Page slider
	 */
	$('.pickup-gallery').each(function(index, element){
		$(element).addClass('pickup-gallery-' + index)
		var pickupSlider = new Swiper('.pickup-gallery-' + index + ' .pickup-gallery-slider', {
			observer: true,
			observeParents: true,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			grabCursor: true,
			loop: false,
			speed: 750,
			slidesPerView: 1,
			spaceBetween: 10,
			navigation: {
				nextEl: '.pickup-gallery-' + index +' .swiper-button-next',
				prevEl: '.pickup-gallery-' + index +' .swiper-button-prev',
			},
			pagination: {
				el: '.pickup-gallery-' + index +' .swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
		})
	})


	/**
	 * Contacts Gallery slider
	 */
	var contactsGallerySlider = new Swiper('.contacts .contacts-gallery', {
		loop: false,
		speed: 650,
		pagination: {
			el: '.contacts .contacts-gallery .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	})


	/**
	 * Shop category Popular Brands slider
	 */
	var categoryPopularBrands = new Swiper('.s-category-brands-slider-container', {
		watchSlidesVisibility: true,
		loop: false,
		slidesPerView: 1,
		spaceBetween: 10,
		navigation: {
			nextEl: '.s-category-brands-slider .swiper-button-next',
			prevEl: '.s-category-brands-slider .swiper-button-prev',
		},
		pagination: {
			el: '.s-category-brands-slider .swiper-pagination',
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
	 * Single Product: Products slider
	 */
	$('.product-single .products-slider-inner').each(function(index, element){
		$(element).addClass('products-slider-inner-' + index)
		var pickupSlider = new Swiper('.products-slider-inner-' + index + ' .products-slider-container', {
			grabCursor: true,
			loop: false,
			speed: 750,
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 30,
			navigation: {
				nextEl: '.products-slider-inner-' + index +' .swiper-button-next',
				prevEl: '.products-slider-inner-' + index +' .swiper-button-prev',
			},
			pagination: {
				el: '.products-slider-inner-' + index +' .swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			breakpoints: {
				375: {
					slidesPerView: 2,
					slidesPerGroup: 2,
					spaceBetween: 15,
				},
				768: {
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


	/**
	 * Quickview Product Modal slider
	 */
	var quickviewNavSlider = new Swiper('.quickview-modal .quickview-nav-slider', {
		observer: true,
		observeParents: true,
		allowTouchMove: false,
		loop: false,
		slidesPerView: 'auto'
	})
	var quickviewBodySlider = new Swiper('.quickview-modal .quickview-body-slider', {
		observer: true,
		observeParents: true,
		allowTouchMove: false,
		loop: false,
		speed: 450,
		slidesPerView: 1,
		spaceBetween: 30,
		thumbs: {
			swiper: quickviewNavSlider
		}
	})
	var quickviewPhotoThumbsSlider = new Swiper('.quickview-modal .quickview-photo-thumbs-slider', {
		observer: true,
		observeParents: true,
		allowTouchMove: false,
		loop: false,
		slidesPerView: 'auto',
		spaceBetween: 8
	})
	var quickviewPhotoSlider = new Swiper('.quickview-modal .quickview-photo-slider', {
		observer: true,
		observeParents: true,
		loop: false,
		speed: 450,
		slidesPerView: 1,
		navigation: {
			nextEl: '.quickview-photo-slider .swiper-button-next',
			prevEl: '.quickview-photo-slider .swiper-button-prev',
		},
		thumbs: {
			swiper: quickviewPhotoThumbsSlider
		}
	})

})