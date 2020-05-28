class Internet {
    constructor(name, speedSent, speedDown, price, selector) {
        this.name = name;
        this.speedSent = speedSent;
        this.speedDown = speedDown;
        this.price = price;
        this.selector = selector;

        Array.from(selector.childNodes)[1].innerHTML = this.name
        Array.from(selector.childNodes)[3].innerHTML = this.speedDown
        Array.from(selector.childNodes)[5].innerHTML = this.speedSent
        Array.from(selector.childNodes)[7].innerHTML = this.price
    }
}
let internet_selector = document.querySelectorAll('.web_extention__offer-content');

const internet1 = new Internet('100 MEGA', '10 Mb/s', '5 Mb/s', '59 zł', internet_selector[0]);
const internet2 = new Internet('150 MEGA', '15 Mb/s', '5 Mb/s', '65 zł', internet_selector[1]);
const internet3 = new Internet('200 MEGA', '20 Mb/s', '5 Mb/s', '75 zł', internet_selector[2]);
const internet4 = new Internet('300 MEGA', '30 Mb/s', '5 Mb/s', '85 zł', internet_selector[3]);
const internet5 = new Internet('500 MEGA', '40 Mb/s', '5 Mb/s', '110 zł', internet_selector[4]);

const internets = [internet1, internet2, internet3, internet4, internet5]

internets.forEach(internet => {
    internet.selector.addEventListener('click', () =>{
        console.log(internet)
        
        internets.forEach(internet => internet.selector.removeAttribute("style"))
        internet.selector.style.border = "1px solid red"

        count.countInternet(internet)
    })
})

