const calc = (price = 15000) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcCount = document.querySelector('.calc-count'),
        calcDay = document.querySelector('.calc-day'),
        total = document.getElementById('total');

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value,
            calcSquareValue = calcSquare.value;
        
        let totalValue = 0,
            calcCountValue = 1,
            calcDayValue = 1;
        if (calcCount.value > 1){
            calcCountValue += calcCount.value / 10;
        }
        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10){
            calcDayValue = 1.5;
        }
        if (calcTypeValue && calcSquareValue){
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else totalValue = 0;
        total.textContent = totalValue;
    };

        calcBlock.addEventListener('input', e => {
            const target = e.target;
            if (target === calcType || target === calcSquare ||
                target === calcCount || target === calcDay){
                    countCalc();
                }
        });
};
export default calc;