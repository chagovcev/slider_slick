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