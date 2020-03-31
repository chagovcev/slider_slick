// slider

// $(document).ready(function(){
//     $('.slider-nav').slick({
//         arrows: true,
//         dots: true,
//         adaptiveHeight: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         speed: 300,
//         easing: 'ease',//стиль анимации
//         infinite: true,
//         initialSlide: 0,
//         autoplay: false,
//         autoplaySpeed: 1000,
//         pauseOnFocus: true,
//         pauseOnHover: true,
//         pauseOnDotsHover: true,
//         draggable: true, //возмодность тянуть за слайды и листать их
//         swipe: true,
//         touchThreshold: 5, //расстояние чтобы провести палецем по экрану чтобы прелистнуть
//         touchMove: true, // возможность двигать ленту слайдера
//         waitForAnimation: false, //дожидается завершения анимации а потом включает кнопку переключения
//         centerMode: true, //добавляет класс .slick-center центральному слойду и его можно как то выделить
//         variableWidth:false,//настраивает ширину по картинке хорошо использовать с centerMode
//         rows: 1, //выстраивает слайды в 2 ряда
//         slidesPerRow: 1,
//         vertical: false,
//         verticalSwiping: false,
//         asNavFor:'.main-window',
//         responsive:[
//             {
//                 breakpoint: 768, //при ширине экрана менее 768 пикселей срабатывают сл. настройки
//                 settings: {
//                     slidesToShow: 2,
//                 }
//             },{
//                 breakpoint: 575, 
//                 settings: {
//                     slidesToShow: 1,
//                 }
//             }
//         ],
//         //appendArrows:$('.content'), //можно переместитьэлементы управления в любой контейнер
//         //appendDots:$('.content'),
//     });   
//     $('.main-window').slick({
//         arrows: false,
//         fade: true, //показывается только одна картинка и не видно скрола, а только плавное появление
//         asNavFor:'.slider-nav',
//     });

//     // События

//     $('.slider-nav').on('beforeChange', function(eveent, slick, currentSlide, nextSlide){
//         console.log(nextSlide);//покажет индекс следующего слайда до его смены 
//     });
//     $('.slider-nav').on('afterChange', function(eveent, slick, currentSlide, nextSlide){
//         console.log(currentSlide); //покажет индекс текущего до слайда после пролистывания
//     });

//     //Методы

//     $('.slider-nav').slick('setPosition'); //настроить позиционирование слайдов
//     $('.slider-nav').slick('goTo',3); //пролистывание на четвертый слайд (если нужно присвоить это управление чему-то другому) Например:
//     $('.link').click(function(event) {
//         $('.slider-nav').slick('goTo',3);
//     });
//     $('.slider-nav').slick('slickNext');//то же что и сферху листает вправо
//     $('.slider-nav').slick('slickPrev');
//     //Можно запустить автоплей и поставить на паузу
//     $('.btn_play').click(function(event) {
//         $('.slider-nav').slick('slickPlay');
//     });
//     $('.btn_pause').click(function(event) {
//         $('.slider-nav').slick('slickPause');
//     });
//     $('.link_add').click(function(event) {
//         $('.slider-nav').slick('slickAdd','<div class="newslide">222</div>');
//     });
//     $('.link_remove').click(function(event) {
//         $('.slider-nav').slick('slickAdd','');
//     });
    
// });



//page input

const input = document.getElementById('productAmountInp'),
		plus = document.querySelector('.amount__plus'),
		minus = document.querySelector('.amount__minus');

input.value = 1;

const add = () => {input.value = +input.value + 1;};
const subtract = () => {
	if(input.value == 0) {return;}
	input.value = +input.value - 1;
};
input.addEventListener(('keyup'), (e) => {
	let key = e.key
	if(key === 'ArrowUp'){add();}
	if(key === 'ArrowDown'){subtract();}		
});

input.addEventListener(('input'), () => {
	input.value = input.value.replace(/[^0-9]/, '');
});
plus.addEventListener(('click'), () => {
	add();
});
minus.addEventListener(('click'), () => {
	subtract();
});

