class Period {
    constructor(name, time, selector) {
        this.name = name;
        // let _time = time;
        this.time = time;
        this.selector = selector;
        this.selector.innerHTML = this.periodText
        // this.changePrices = () => {
        //     let price = Television.price * time;
        // }

     
    }

    get periodText() {
        return this.name;
    }
    get periodTime(){
        return this.time;
    }

}

const period1 = new Period('24 miesiące', 24, document.querySelector('.period-choice__option1-text'));
const period2 = new Period('12 miesiące', 12, document.querySelector('.period-choice__option2-text'));
const period3 = new Period('Czas nieokreślony', 1, document.querySelector('.period-choice__option3-text'));

// to jest do wywalenia do kosza zniszczyc spalic zesrac sie
// document.querySelector('.period-choice__option1-text').innerHTML = period1.periodText
// document.querySelector('.period-choice__option2-text').innerHTML = period2.periodText
// document.querySelector('.period-choice__option3-text').innerHTML = period3.periodText


////////////////////////////////////////


// const option1 = document.querySelector('.option-1');
// option1.addEventListener('click', Period.changePrices);

// const option2 = document.querySelector('.option-2');
// option2.addEventListener('click', Period.changePrices);

// const option3 = document.querySelector('.option-3');
// option3.addEventListener('click', Period.changePrices);
const periods = [period1, period2, period3]
periods.forEach(period => {
    period.selector.addEventListener('click', () =>{
        console.log(period)
        periods.forEach(period => period.selector.removeAttribute("style"))
        period.selector.style.border = "1px solid red"
        count.countPeriod(period)
    })
})

