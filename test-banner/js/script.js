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


//время для темной темы


function getTimeOfDay(){

    const date = new Date();
    const hours = date.getHours();  

     if(hours>=18 && hours<24){
        document.body.style.backgroundColor = "black";

    }

}
getTimeOfDay();
