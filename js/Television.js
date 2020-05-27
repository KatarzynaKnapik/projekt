class Television {
    constructor(name, chanels, chanelsHD, price) {
        this.name = name;
        this.chanels = chanels;
        this.chanelsHD = chanelsHD;
        this.price = price;
    }
}

const tvPackage1 = new Television('Mikro HD', '76', '38', '75');
const tvPackage2 = new Television('Mini HD', '137', '65', '90');
const tvPackage3 = new Television('Wielotematyczny HD', '192', '96', '105');
const tvPackage4 = new Television('Wielotematyczny Super HD', '206', '109', '119');
const tvPackage5 = new Television('Wielotematyczny Mega HD', '218', '118', '139');
