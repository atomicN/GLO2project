const timer = (deadline) => {
    const   timerDays = document.getElementById('timer-days'),
            timerHours = document.getElementById('timer-hours'),
            timerMinutes = document.getElementById('timer-minutes'),
            timerSeconds = document.getElementById('timer-seconds');
    
    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            days = Math.floor(timeRemaining / 60 / 60 / 24),
            hours = Math.floor((timeRemaining / 60 / 60) % 24),
            minutes = Math.floor((timeRemaining / 60) % 60),
            seconds = Math.floor(timeRemaining % 60);
        
        return {timeRemaining, days, hours, minutes, seconds};
    };

    const updateTimer = (content, value) => {
        if (value < 10) {
            content.textContent = `0${value}`;
        } else content.textContent = value;

    };
    const renderTimer = () => {
        if (getTimeRemaining().timeRemaining > 0){
            updateTimer(timerDays,getTimeRemaining().days);
            updateTimer(timerHours,getTimeRemaining().hours);
            updateTimer(timerMinutes,getTimeRemaining().minutes);
            updateTimer(timerSeconds,getTimeRemaining().seconds);
        }
    };

    setInterval(renderTimer, 1000);
};
export default timer;