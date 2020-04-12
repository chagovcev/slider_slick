const headerBurger = document.querySelector('.header__burger'),
    headerMenu = document.querySelector('.header__menu'),
    body = document.querySelector('body');

headerBurger.addEventListener(('click'), () => {
    headerMenu.classList.toggle('active');
    headerBurger.classList.toggle('active');
    body.classList.toggle('lock');
});
