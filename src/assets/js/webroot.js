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

setTimeout(function() {
    $('body').addClass('loaded');
}, 1000);

var initialWidthSize = 0;

$(document).ready(function() {
    initialWidthSize = $(window).width();

    $('<script/>', {
        type: 'text/javascript',
        src: 'assets/js/jquery.vmap.js'
    }).appendTo('head');
    $('<script/>', {
        type: 'text/javascript',
        src: 'assets/js/jquery.vmap.world.js'
    }).appendTo('head');
    $('<script/>', {
        type: 'text/javascript',
        src: 'assets/js/jquery.vmap.sampledata.js'
    }).appendTo('head');


    jQuery.fn.extend({

        testf: function() {
            console.log('on testf');
        }
    });
    $('#testModal').click(function() {
        $('#myModal').modal('show');
    });


    jQuery('#vmap').vectorMap({
        map: 'world_en',
        backgroundColor: '#333333',
        color: '#ffffff',
        hoverOpacity: 0.7,
        selectedColor: '#666666',
        enableZoom: true,
        showTooltip: true,
        scaleColors: ['#C8EEFF', '#006491'],
        values: sample_data,
        normalizeFunction: 'polynomial'
    });

    if ($(window).width() <= 560) {
        $("#sec4tab").each(function() {
            var $this = $(this);
            var newrows = [];
            $this.find("tr").each(function() {
                var i = 0;
                $(this).find("td").each(function() {
                    i++;
                    if (newrows[i] === undefined) {
                        newrows[i] = $("<tr></tr>");
                    }
                    newrows[i].append($(this));
                });
            });
            $this.find("tr").remove();
            $.each(newrows, function() {
                $this.append(this);
            });
        });
    }

});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

    //var section = document.querySelectorAll('div[class^="section"]');
    var section = document.querySelectorAll('div[class^="section1"]');

    section.style.backgroundImage = "url(../../../assets/images/cover2.jpg)";

}

$(window).resize(function() {
    var currentWidthSize = $(window).width();

    if ((initialWidthSize > 560 && currentWidthSize <= 560) ||
        (initialWidthSize <= 560 && currentWidthSize > 560)) {
        initialWidthSize = currentWidthSize;

        $("#sec4tab").each(function() {
            console.log("on table sec4tab");
            var $this = $(this);
            var newrows = [];
            $this.find("tr").each(function() {
                var i = 0;
                $(this).find("td").each(function() {
                    i++;
                    if (newrows[i] === undefined) {
                        newrows[i] = $("<tr></tr>");
                    }
                    newrows[i].append($(this));
                });
            });
            $this.find("tr").remove();
            $.each(newrows, function() {
                $this.append(this);
            });
        });
    }
});

function hover(element, newImg) {
    element.setAttribute('src', newImg);
}