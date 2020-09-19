$('.dropdown-menu').click(function(e) {
	e.stopPropagation()
})

$('.header-bottom .navigation .search-form input').on('click', function() {
	$(this).parents('.search-form').addClass('is-active')
	$('.header-bottom .navigation').addClass('search-toggled')
	$('.header-bottom .navigation .menu').addClass('is-hidden')
	if( $('.modal-backdrop').length == 0 ) {
		$('body').append('<div class="modal-backdrop fade"></div>')
		$('.modal-backdrop').on('click', function() {
			$(this).remove()
			$('.header-bottom .navigation').removeClass('search-toggled')
			$('.header-bottom .navigation .search-form').removeClass('is-active')
			$('.header-bottom .navigation .menu').removeClass('is-hidden')
		})
	}
})

// $(document).on('click', function(e) {
// 	var el = '.search-form';
// 	if ( $(e.target).closest(el).length) {
// 		console.log(true);
// 	} else {
// 		console.log(false);
// 	}
// })