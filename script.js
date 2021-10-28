const   round = document.querySelector('.round'),
        square = document.querySelector('.square'),
        stopPlay = document.querySelector('.stop-play'),
        reset = document.querySelector('.reset');
let countRound = 0;
let countSquare = 550;
let idInterval;
let active = false;

const animate = () => {
    countRound += 5;
    countSquare -= 5;
    idInterval = requestAnimationFrame(animate);
    round.style.top = countRound +'px';
    square.style.top = countSquare + 'px';
    console.log(round.style.top);
    if (countRound > 550 && countSquare < 0){
        cancelAnimationFrame(idInterval);
    }
    
}

stopPlay.addEventListener('click', () => {
    if (active){
        cancelAnimationFrame(idInterval);
        active = false;
    } else {
        idInterval = requestAnimationFrame(animate);
        active = true;
    }
});
reset.addEventListener('click',() => {
    countRound = 0;
    countSquare = 550;
    round.style.top = countRound +'px';
    square.style.top = countSquare + 'px';
    cancelAnimationFrame(idInterval);
})