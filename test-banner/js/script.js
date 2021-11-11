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
    const swiperSlidePrev = document.querySelector('.swiper-slide-prev .text-slider__comments' )
    const swiperSlide = document.querySelector('.swiper-slide-active .text-slider__comments ')
    const swiperSlideNext = document.querySelector('.swiper-slide-next .text-slider__comments')
    const textSliderComments = document.querySelector('.text-slider__comments')
    const priceBlock1 = document.querySelector('.price__block1')
    const priceBlock2 = document.querySelector('.price__block2')
    const priceBlock3 = document.querySelector('.price__block3')
    const priceWrapper = document.querySelector('.price-wrapper')
    const footerText = document.querySelector('.footer-text')
    const date = new Date();
    const hours = date.getHours();  
     if(hours>=18 && hours<24){
        document.body.style.backgroundColor = "black";
        priceBlock1.style.backgroundColor = '#373640';
        priceBlock2.style.backgroundColor = '#373640';
        priceBlock3.style.backgroundColor = '#373640';
        priceWrapper.style.color = "white";
        footerText.style.color = '#7D7D80';
        textSliderComments.style.background = 'linear-gradient(225deg, #262526 0%, #19181A 100%)';
        textSliderComments.style.color = '#ffffff'
        swiperSlide.style.background = 'linear-gradient(225deg, #262526 0%, #19181A 100%)'
        swiperSlideNext.style.background = 'linear-gradient(225deg, #262526 0%, #19181A 100%)'
        swiperSlidePrev.style.background = 'linear-gradient(225deg, #262526 0%, #19181A 100%)'
        swiperSlide.style.color = '#ffffff'
        swiperSlidePrev.style.color = '#ffffff'
        swiperSlideNext.style.color = '#ffffff'
    }
    setTimeout(getTimeOfDay, 1000)
}
getTimeOfDay();

function chooseLink(){
    const radioBlock1 = document.getElementById('radio1')
    const radioBlock2 = document.getElementById('radio2')
    const radioBlock3 = document.getElementById('radio3')
    if(radioBlock1.checked){
         return 'https://www.google.com/search?q=1'
    }
    else if(radioBlock2.checked){
        return 'https://www.google.com/search?q=2'
    }
   else {
        return 'https://www.google.com/search?q=3'
    }

}

console.log(chooseLink())

