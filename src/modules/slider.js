const slider = (block, sliderItems, sliderDotsList, sliderDots, activeSlide = 'portfolio-item-active', activeDot = 'dot-active') => {
    const sliderBlock = document.querySelector(block),
        slides = document.querySelectorAll(sliderItems),
        dotsList = document.querySelector(sliderDotsList),
        dots = document.getElementsByClassName(sliderDots);
        
    let currentSlide = 0;
    let interval;
    
    // stop slider
    for (let i of [sliderBlock, slides, dotsList, dots]){
        if (i === null || slides.length == 0) return;
    }
    

    slides.forEach(() => {
        dotsList.insertAdjacentHTML('beforeend',`<li class="dot"></li>`);
    });

    const prevSlide = (slides, index, strClass) => {
        slides[currentSlide].classList.remove(strClass);
    };
    const nextSlide = (slides, index, strClass) => {
        slides[currentSlide].classList.add(strClass);
    };

    const autoSlide = () => {
        prevSlide(slides, currentSlide, activeSlide);
        prevSlide(dots, currentSlide, activeDot);
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;

        nextSlide(slides, currentSlide, activeSlide);
        nextSlide(dots, currentSlide, activeDot);
    };
    const startSlide = () => {
        interval = setInterval(autoSlide,2000);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };

    sliderBlock.addEventListener('click', e =>{
        e.preventDefault();
        const target = e.target;

        if (!target.matches('.dot, .portfolio-btn')){
            return;
        }
        prevSlide(slides, currentSlide, activeSlide);
        prevSlide(dots, currentSlide, activeDot);

        if (target.matches('#arrow-right')){
            currentSlide++;
        } else if (target.matches('#arrow-left')){
            currentSlide--;
        } else if (target.classList.contains('dot')){
            for (let i in dots){
                if (target === dots[i]) currentSlide = i;
            }
        }

        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;

        nextSlide(slides, currentSlide, activeSlide);
        nextSlide(dots, currentSlide, activeDot);
    });

    sliderBlock.addEventListener('mouseenter', e => {
        const target = e.target;
        if (target.matches('.dot, .portfolio-btn')) stopSlide();
    }, true);

    sliderBlock.addEventListener('mouseleave', e => {
        const target = e.target;
        if (target.matches('.dot, .portfolio-btn')) startSlide();
    }, true);

    startSlide();
};

export default slider;