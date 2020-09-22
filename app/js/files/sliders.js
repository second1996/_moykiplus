document.addEventListener("DOMContentLoaded", function() {
	/**
	 * Mega Menu Brands slider
	 */
	$('.mega-menu .brands-slider-container').each(function(index, element){
		$(element).addClass('brands-slider-' + index)
		var mmBrands = new Swiper('.brands-slider-' + index, {
			observer: true,
			observeParents: true,
			watchSlidesVisibility: true,
			slidesPerView: 4,
			loop: false,
			spaceBetween: 18,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		})
	})

})