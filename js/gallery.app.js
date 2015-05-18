//Initiate Swiper
var swiper = new Swiper('.swiper-container', {
	// Optional parameters
	loop: true
})

//Variable to test for first action
var swiped = false;
//Record Swipes
swiper.on('slideChangeEnd', function () {
	if(swiped === false){
		ga('send', 'event', 'In-Page Events', 'Swiper', 'First Swipe');
		console.log('first swipe');
		swiped = true;
	}
	ga('send', 'event', 'In-Page Events', 'Swiper', 'Swipe');
	ga('send', 'event', 'In-Page Events', 'Swiper', 'Slide ' + swiper.previousIndex + ' Viewed');
	console.log('swipe - slide: ' + swiper.previousIndex );
});      