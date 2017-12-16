<<<<<<< HEAD
function init_slider() {
    var appVue = new Vue({
        el: "#s_e_c_v_u_e__",
        data: {
            currentSlide: 0,
            isPreviousSlide: false,
            isFirstLoad: true,
            slides: [{
                    headlineFirstLine: "Your",
                    headlineSecondLine: "KIDS",
                    sublineFirstLine: "For Your",
                    sublineSecondLine: "KIDS",
                    sideMessage: "",
                    bgImg: "assets/images/kidsTakingPhoto.jpg",
                    rectImg: "assets/images/kidsTakingPhotoBack.jpg"
                },
                {
                    headlineFirstLine: "The",
                    headlineSecondLine: "GRANDS",
                    sublineFirstLine: "For The",
                    sublineSecondLine: "GRANDS",
                    sideMessage: "",
                    bgImg: "assets/images/oldersTakingPhoto.jpg",
                    rectImg: "assets/images/oldersTakingPhotoBack.jpg"
                },
                {
                    headlineFirstLine: "And...",
                    headlineSecondLine: "EVERYONE",
                    sublineFirstLine: "",
                    sublineSecondLine: "EVERYONE",
                    sideMessage: "",
                    bgImg: "assets/images/everyoneTakingPhoto.jpg",
                    rectImg: "assets/images/everyoneTakingPhotoBack.jpg"
                }
            ]
        },
        mounted: function() {
            console.log($('#s_e_c_v_u_e__').is(':visible'));
            if ($('#s_e_c_v_u_e__').is(':visible')) { //if the container is visible on the page

                var productRotatorSlide = document.getElementById("s_e_c_v_u_e__");
                console.log('productRotatorSlide: ' + productRotatorSlide);
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
            }
        },
        methods: {
            updateSlide: function(index) {
                console.log("move to other slide vue m");
                index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
                this.currentSlide = index;
                this.isFirstLoad = false;
            }

        }
    });
}

$(document).ready(function() {


    // window.onload = function() {
    //     setTimeout(function() {
    //         init_slider();
    //     }, 2000);
    // };

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
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
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
        var intervalID = window.setInterval(function() {

            callback();

            if (++x === repetitions) {
                window.clearInterval(intervalID);
            }
        }, delay);
    }

    var i = 1;

    var sInt = setInterval(function blinker() {
        if (i == 1) {
            clearInterval(sInt);
        }
        $('.blink_me').delay(2000);
        $('.blink_me').fadeOut(500);
        $('.blink_me').fadeIn(500);
        i++;

    }, 1000);
});
=======
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

 
var appVue = new Vue({
	el: "#s_e_c_v_u_e__",
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
				sideMessage:"",
				bgImg: "assets/images/kidsTakingPhoto.jpg",
				rectImg: "assets/images/kidsTakingPhotoBack.jpg"
			},
			{
				headlineFirstLine: "The",
				headlineSecondLine: "GRANDS",
				sublineFirstLine: "For The",
				sublineSecondLine: "GRANDS",
				sideMessage:"",
				bgImg: "assets/images/oldersTakingPhoto.jpg",
				rectImg: "assets/images/oldersTakingPhotoBack.jpg"
			},
			{
				headlineFirstLine: "And...",
				headlineSecondLine: "EVERYONE",
				sublineFirstLine: "",
				sublineSecondLine: "EVERYONE",
				sideMessage:"",
				bgImg: "assets/images/everyoneTakingPhoto.jpg",
				rectImg: "assets/images/everyoneTakingPhotoBack.jpg"
			}
			]
	},
	mounted: function () {
		console.log($('#secvue-1').is(':visible'));
		if($('#secvue-1').is(':visible')) { //if the container is visible on the page
			 
		var productRotatorSlide = document.getElementById("'secvue-1'");
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
	}  
	},
		methods: {
			updateSlide: function (index) {
				console.log("move to other slide vue m");	
				index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
				this.currentSlide = index;
				this.isFirstLoad = false; 
			}
	
		}
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



>>>>>>> 084df7e4ad64943ad9c38877d2a06031396dd734
