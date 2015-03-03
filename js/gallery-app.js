$(function(){
	ga('send', 'event', 'In-Page Events', 'Swiper', 'Slide 0 Viewed');
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
    			ga('send', 'event', 'In-Page Events', 'Swiper', 'First Swipe');
    			console.log('first swipe');
    			swiped = true;
    		}
			ga('send', 'event', 'In-Page Events', 'Swiper', 'Slide Change');
			ga('send', 'event', 'In-Page Events', 'Swiper', 'Slide ' + gallery.activeIndex + ' Viewed');
			console.log('swipe - slide: ' + gallery.activeIndex );
		}
	})

	//Smart resize
	$(window).resize(function(){
		gallery.resizeFix(true)	
	})
})
