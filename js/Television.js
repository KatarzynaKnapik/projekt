class Television {
    constructor(name, chanelsNumber, chanelsHDNumber, price, selector) {
        this.name = name;
        // this.name = 
        this.chanelsNumber = chanelsNumber;
        this.chanelsHDNumber = chanelsHDNumber;
        this.price = price;
        this.chanels = [];
        this.selector = selector;
        
        Array.from(selector.childNodes)[1].innerHTML = this.name
        Array.from(selector.childNodes)[3].innerHTML = this.chanelsNumber
        Array.from(selector.childNodes)[5].innerHTML = this.chanelsHDNumber
        Array.from(selector.childNodes)[7].innerHTML = this.price
        // Array.from(selector.childNodes)[9].innerHTML = this.name
        // this.showChanels = () => {

        // }
    }

    get tvName() {
        return this.name;
    }

    get tvChanelsNumber() {
        return this.chanelsNumber;
    }

    get tvChanelsHDNumber() {
        return this.chanelsHDNumber;
    }

    get tvPrice() {
        return this.price;
    }

    // addChanels(chanel) {
    //     this.chanels.push(chanel)
    // }
}

let options_selector = document.querySelectorAll('.tv-package__offer-content');




const tvPackage1 = new Television('Mikro HD', '76', '38', '75', options_selector[0]);
// tvPackage1.addChanels('TVP1 HD', 'TVP2 HD', 'TVP3', 'TVN HD', 'POLSAT HD', 'TVN7 HD');
const tvPackage2 = new Television('Mini HD', '137', '65', '90',options_selector[1]);
const tvPackage3 = new Television('Wielotematyczny HD', '192', '96', '105',options_selector[2]);
const tvPackage4 = new Television('Wielotematyczny Super HD', '206', '109', '119',options_selector[3]);
const tvPackage5 = new Television('Wielotematyczny Mega HD', '218', '118', '139',options_selector[4]);


// TILE 1

// document.querySelector('.tv-package__offer-tile1__name').innerHTML = tvPackage1.tvName
// document.querySelector('.tv-package__offer-tile1__chanels').innerHTML = tvPackage1.tvChanelsNumber
// document.querySelector('.tv-package__offer-tile1__chanelsHD').innerHTML = tvPackage1.tvChanelsHDNumber
// document.querySelector('.tv-package__offer-tile1__price').innerHTML = tvPackage1.tvPrice

const btnTile1 = document.querySelector('.tv-package__offer-tile1__btn');
// btnTile1.addEventListener('click', tvPackage1.shwoChanels);

////////////////////////////////////////////////////
const tvs = [tvPackage1,tvPackage2,tvPackage3,tvPackage4,tvPackage5];
tvs.forEach(tvPackage => {
    tvPackage.selector.addEventListener('click', () =>{
        console.log(tvPackage)
        tvs.forEach(tvPackage => tvPackage.selector.removeAttribute("style"))
        tvPackage.selector.style.border = "1px solid red"
        count.countTelevision(tvPackage)
    })
})