const validate = () => {
    
    document.body.addEventListener('input', event => {
        const target = event.target;
        if(target.type == 'text'){
            target.value = target.value.replace(/[^а-яА-Я()-\s]/, '');
        }
        if(target.type == 'tel'){
            target.value = target.value.replace(/[^0-9()-]/, '');
        }
        if(target.type == 'email'){
            target.value = target.value.replace(/[^a-zA-Z@-_.!~*']/, '');
        }
    })
};

export default validate;