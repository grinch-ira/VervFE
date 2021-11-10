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
    const textSliderComments = document.querySelector('.text-slider__comments')
    const priceBlock1 = document.querySelector('.price__block1')
    const priceBlock2 = document.querySelector('.price__block2')
    const priceBlock3 = document.querySelector('.price__block3')
    const priceWrapper = document.querySelector('.price-wrapper')
    const footerText = document.querySelector('.footer-text')
    const date = new Date();
    const hours = date.getHours();  
     if(hours>=15 && hours<24){
        document.body.style.backgroundColor = "black";
        priceBlock1.style.backgroundColor = '#373640';
        priceBlock2.style.backgroundColor = '#373640';
        priceBlock3.style.backgroundColor = '#373640';
        priceWrapper.style.color = "white";
        footerText.style.color = '#7D7D80';
        textSliderComments.style.background = 'linear-gradient(225deg, #262526 0%, #19181A 100%)';
        textSliderComments.style.color = '#ffffff'
    }

}
getTimeOfDay();
