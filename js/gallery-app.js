$(function(){
	ga('send', 'event', 'in-page events', 'swiper', 'slide 0 viewed');
	var swiped = false;
	var gallery = $('.swiper-container').swiper({
		slidesPerView:'auto',
		watchActiveIndex: true,
		centeredSlides: true,
		pagination: '.pagination',
    	paginationClickable: true,
    	paginationAsRange: false,
    	onSlideChangeEnd : function() {
    		if(swiped === false){
    			ga('send', 'event', 'in-page events', 'swiper', 'first swipe');
    			console.log('first swipe');
    			swiped = true;
    		}
			ga('send', 'event', 'in-page events', 'swiper', 'slide change');
			ga('send', 'event', 'in-page events', 'swiper', 'slide ' + gallery.activeIndex + ' viewed');
			console.log('swipe - slide: ' + gallery.activeIndex );
		}
	})

	//Smart resize
	$(window).resize(function(){
		gallery.resizeFix(true)	
	})
})
