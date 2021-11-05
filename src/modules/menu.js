const menu = () => {
    const menu = document.querySelector('menu');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    const scroll = elem => {
        elem.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    document.addEventListener('click', e => {
        const target = e.target;
        if (menu.classList.contains('active-menu')){
            if (target.classList.contains('close-btn')) handleMenu();
            if (!target.closest('menu')) handleMenu();
        }
        if (target.classList.contains('menu') || target.closest('.menu')){ 
            handleMenu();
        }
        if (target.classList.contains('menu-item')){
            e.preventDefault();
            const blockID = target.getAttribute('href').substr(1);
            scroll(document.getElementById(blockID));
            handleMenu();
        }
        if (target.id == 'mouse-scroll' || target.closest('#mouse-scroll')) {
            e.preventDefault();
            scroll(document.getElementById('service-block'));
        }
    });
    
};
    export default menu;