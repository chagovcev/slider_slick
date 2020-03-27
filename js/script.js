// slider

$(document).ready(function(){
    $('.slider-nav').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        easing: 'ease',//стиль анимации
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 1000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: false,
        swipe: true,
        touchThreshold: 5, //расстояние чтобы провести палецем по экрану чтобы прелистнуть
        touchMove: true, // возможность двигать ленту слайдера
        waitForAnimation: false, //дожидается завершения анимации а потом включает кнопку переключения
        centerMode: false, //добавляет класс .slick-center центральному слойду и его можно как то выделить
        variableWidth:false,//настраивает ширину по картинке хорошо использовать с centerMode
        rows: 1, //выстраивает слайды в 2 ряда
        slidesPerRow: 1,
        vertical: true,
        verticalSwiping: true,

    });    
});



//page input

const input = document.querySelector('input'),
    plus = document.querySelector('.amount__plus'),
    minus = document.querySelector('.amount__minus');

input.value = 0;

input.addEventListener(('input'), () => {
    input.value = input.value.replace(/[^0-9]/, '');
})
plus.addEventListener(('click'), () => {
       input.value = +input.value + 1;
});
minus.addEventListener(('click'), () => {
    if(input.value == 0) {return;}
    input.value = +input.value - 1;
});

