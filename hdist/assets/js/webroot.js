var appVue = new Vue({
		el: '#secvue',
		data: {
			currentSlide: 0,
			isPreviousSlide: false,
			isFirstLoad: true,
			slides: [
				{
					headlineFirstLine: "Your",
					headlineSecondLine: "KIDS",
					sublineFirstLine: "For Your",
					sublineSecondLine: "KIDS",
					sideMessage:"Let your kids enjoy the power of taking photos by playing around on our 4KIDS contests!",
					bgImg: "assets/images/kidsTakingPhoto.jpg",
					rectImg: "assets/images/kidsTakingPhotoBack.jpg"
				},
				{
					headlineFirstLine: "The",
					headlineSecondLine: "GRANDS",
					sublineFirstLine: "For The",
					sublineSecondLine: "GRANDS",
					sideMessage:"Let your older ones have a hobby and also having fun shooting, sharing their photos and finding their next trips!",
					bgImg: "assets/images/oldersTakingPhoto.jpg",
					rectImg: "assets/images/oldersTakingPhotoBack.jpg"
				},
				{
					headlineFirstLine: "And...",
					headlineSecondLine: "EVERYONE",
					sublineFirstLine: "",
					sublineSecondLine: "EVERYONE",
					sideMessage:"Just to all of you! Enjoy and realize your dreams when it came to be memorable!",
					bgImg: "assets/images/everyoneTakingPhoto.jpg",
					rectImg: "assets/images/everyoneTakingPhotoBack.jpg"
				}
				]
		},
		mounted: function () {
			
			console.log($('#secvue').is(':visible'));
//			if($('#secvue').is(':visible')) { //if the container is visible on the page
				 
			var productRotatorSlide = document.getElementById("secvue");
			console.log('productRotatorSlide: '+productRotatorSlide);
			var startX = 0;
			var endX = 0;

			productRotatorSlide.addEventListener("touchstart", (event) => startX = event.touches[0].pageX);

			productRotatorSlide.addEventListener("touchmove", (event) => endX = event.touches[0].pageX);

			productRotatorSlide.addEventListener("touchend", function(event) {
				var threshold = startX - endX;

				if (threshold < 150 && 0 < this.currentSlide) {
					this.currentSlide--;
				}
				if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
					this.currentSlide++;
				}
			}.bind(this));
//		}  
		},
		methods: {
			updateSlide: function (index) {
				console.log("move to other slide");	
				index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
				this.currentSlide = index;
				this.isFirstLoad = false; 
			}
		}
	});

$( document ).ready(function() {

jQuery(document).ready(function() {
	var offset = 250;
	var duration = 300;

	jQuery(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.back-to-top').fadeIn(duration);
		} else {
			jQuery('.back-to-top').fadeOut(duration);
		}
	});


	jQuery('.back-to-top').click(function(event) {
		event.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, duration);
		return false;
	});

});




	


var mySwiper = new Swiper(".swiper-container", {
	direction: "horizontal",
	loop: true,
	pagination: ".swiper-pagination",
	grabCursor: true,
	speed: 25000,
	paginationClickable: true,
	parallax: true,
	autoplay: true,
	effect: "slide",
	mousewheelControl: 1
});

function setIntervalX(callback, delay, repetitions) {
	var x = 0;
	var intervalID = window.setInterval(function () {

		callback();

		if (++x === repetitions) {
			window.clearInterval(intervalID);
		}
	}, delay);
}

var i=1;

var sInt = setInterval(function blinker() {
	if(i==1){
		clearInterval(sInt);
	}
	$('.blink_me').delay(2000);
	$('.blink_me').fadeOut(500);
	$('.blink_me').fadeIn(500);
	i++;

}, 1000);

});



