import {animate} from './helpers';

const modal = () => {
    const modal = document.querySelector('.popup'),
        buttons = document.querySelectorAll('.popup-btn'),
        closeBtn = modal.querySelector('.popup-close');

    const closeModal = () => {
        modal.style.transform = 'translateX(9999px)';
        modal.style.opacity = '0';
    };

    const animateModal = () => {
        modal.style.cssText = `
                            display: block;
                            opacity: 0;
                            transform: translateX(9999px);
                        `;
    
        buttons.forEach( btn => {
            btn.addEventListener('click', event => {               
                animate({
                        timing(timeFraction){
                            return timeFraction;
                        },
                        draw(progress){
                            modal.style.transform = 'translateX(0)';
                            modal.style.opacity = progress;
                        },
                        duration: 200});
            });
        });

        modal.addEventListener('click', e => {
            const target = e.target;

            if (!target.closest('.popup-content') || target.classList.contains('popup-close')){
                closeModal();
            }
        });
    };


    
    if (document.documentElement.clientWidth <= 768) {
        buttons.forEach( btn => {
            btn.addEventListener('click', event => {
                modal.style.display = 'block';
            });
        });

        modal.addEventListener('click', e => {
            const target = e.target;
            console.log(target);
            if (!target.closest('.popup-content') || target.classList.contains('popup-close')){
                modal.style.display = 'none';
            }
        });
    }
    else animateModal();

    
};

export default modal;