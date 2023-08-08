function mobileMenu () {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');
    const head = document.querySelector('.header__head');
    const close = document.querySelector('.header__close');
    const block = document.querySelector('.header__block');
    const description = document.querySelector('.header__description');
    const social = document.querySelector('.header__social');
    const wrapper = document.querySelector('.header__wrapper');
    const promoBlock = document.querySelector('.promo');
    const body = document.querySelector('body');


    const menuItems = document.querySelectorAll('.header__item')

    function activeMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        head.classList.add('active');
        block.classList.add('active');
        description.classList.add('active');
        social.classList.add('active');
        wrapper.classList.add('active');
        promoBlock.classList.add('active');
        body.classList.add('lock');
    }

    function disactiveMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        head.classList.remove('active');
        block.classList.remove('active');
        description.classList.remove('active');
        social.classList.remove('active');
        wrapper.classList.remove('active');
        promoBlock.classList.remove('active');
        body.classList.remove('lock');
    }

    burger.addEventListener('click', () => {
        activeMenu();
    });

    close.addEventListener('click', () => {
        disactiveMenu();
    })

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            disactiveMenu();
        })
    })

}

module.exports = mobileMenu;