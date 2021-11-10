new Swiper('.text-slider',{
         spaceBetween: 3,
        slidePerGroup:1,
        centeredSlides:true,
        slidesPerView:1.1,
        initialSlide:0,
       loop:true, 
        loopedSlides:3,
        autoplay:{
            delay:5000,
            stopOnLastSlide:false,
            disableOnInteraction:true
        },
        speed:1000,
});
