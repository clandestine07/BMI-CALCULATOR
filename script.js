const weight = document.querySelector('.weight-input');
const height = document.querySelector('.height-input');
const display = document.querySelector('.display-bmi');
const button = document.querySelector('.button');
const indicator = document.querySelector(".status");

let bmi = 0;
button.addEventListener('click' , function() {
    let personWeight = Number(weight.value);
    // console.log(personWeight);
    let personHeight = Number(height.value);
    // console.log(personHeight);

    if(personWeight && personHeight){
        bmi = personWeight / (personHeight * personHeight);
        display.value = bmi.toFixed(1);
    }
    else{
        display.value = 'null';
    }
    if(!bmi){
        indicator.innerText = 'please enter a valid data';
    }
    else if(bmi <= 18.4){
        indicator.innerText = 'underweight';
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        indicator.innerText = 'normal';
    }
    else if(bmi >= 25 && bmi <= 29.9){
        indicator.innerText = 'overweight';
    }
    else if(bmi >= 30.0){
        indicator.innerText = 'obese';
    }
});