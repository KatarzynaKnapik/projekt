class Television {
    constructor(name, chanelsNumber, chanelsHDNumber, price) {
        this.name = name;
        this.chanelsNumber = chanelsNumber;
        this.chanelsHDNumber = chanelsHDNumber;
        this.price = price;
        this.chanels = [];

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

const tvPackage1 = new Television('Mikro HD', '76', '38', '75');
// tvPackage1.addChanels('TVP1 HD', 'TVP2 HD', 'TVP3', 'TVN HD', 'POLSAT HD', 'TVN7 HD');
const tvPackage2 = new Television('Mini HD', '137', '65', '90');
const tvPackage3 = new Television('Wielotematyczny HD', '192', '96', '105');
const tvPackage4 = new Television('Wielotematyczny Super HD', '206', '109', '119');
const tvPackage5 = new Television('Wielotematyczny Mega HD', '218', '118', '139');


// TILE 1

document.querySelector('.tv-package__offer-tile1__name').innerHTML = tvPackage1.tvName
document.querySelector('.tv-package__offer-tile1__chanels').innerHTML = tvPackage1.tvChanelsNumber
document.querySelector('.tv-package__offer-tile1__chanelsHD').innerHTML = tvPackage1.tvChanelsHDNumber
document.querySelector('.tv-package__offer-tile1__price').innerHTML = tvPackage1.tvPrice

const btnTile1 = document.querySelector('.tv-package__offer-tile1__btn');
// btnTile1.addEventListener('click', tvPackage1.shwoChanels);

////////////////////////////////////////////////////
