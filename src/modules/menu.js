const menu = () => {
    const menuBtn = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = menu.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul>li>a'),
        mouseScroll = document.getElementById('mouse-scroll');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    const scroll = elem => {
        elem.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    menuBtn.addEventListener('click', handleMenu);
    closeBtn.addEventListener('click', handleMenu);

    mouseScroll.addEventListener('click', event => {
        event.preventDefault();
        scroll(document.getElementById('service-block'));
    });

    menuItems.forEach( item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            const blockID = item.getAttribute('href').substr(1);
            scroll(document.getElementById(blockID));
            handleMenu();
        });
    });
};
    export default menu;