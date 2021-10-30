const modal = () => {
    const modal = document.querySelector('.popup'),
        buttons = document.querySelectorAll('.popup-btn'),
        closeBtn = modal.querySelector('.popup-close');

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

        closeBtn.addEventListener('click', () => {
            modal.style.transform = 'translateX(9999px)';
            modal.style.opacity = '0';
        });
    };


    if (document.documentElement.clientWidth <= 768) {
        buttons.forEach( btn => {
            btn.addEventListener('click', event => {
                modal.style.display = 'block';
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    else animateModal();

    
};

export default modal;