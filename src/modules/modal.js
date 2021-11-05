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
                            transition: opacity .3s;
                            transform: translateX(9999px);
                        `;
    
        buttons.forEach( btn => {
            btn.addEventListener('click', event => {
                modal.style.transform = 'translateX(0)';
                modal.style.opacity = '1';
            });
        });

        modal.addEventListener('click', e => {
            const target = e.target;
            console.log(target);
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