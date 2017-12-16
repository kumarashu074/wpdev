var webGlObject = (function() {
    return {
        init_slider: function() {
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
    }
})();