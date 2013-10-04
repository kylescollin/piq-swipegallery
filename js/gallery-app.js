$(function(){
	var gallery = $('.swiper-container').swiper({
		slidesPerView:'auto',
		watchActiveIndex: true,
		centeredSlides: true,
	})

	//Smart resize
	$(window).resize(function(){
		changeSize()
		gallery.resizeFix(true)	
	})
})
