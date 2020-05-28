class Equipment {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    get eqName() {
        return this.name;
    }

    get eqPrice() {
        return this.price;
    }
}

const eq1 = new Equipment('Dzierżawa dekodera', '10');
const eq2 = new Equipment('Zakup dekodera', '240');

const eq3 = new Equipment('Router WiFi Standard', '0');
const eq4 = new Equipment('Router WiFi Premium', '99');
const eq5 = new Equipment('Router WiFi Premium AC ', '199');

// TV
// POSSIBILITY 1

document.querySelector('.eq-options__chooses-possibility-1-name').innerHTML = eq1.eqName
document.querySelector('.eq-options__chooses-possibility-1-price').innerHTML = eq1.eqPrice

// POSSIBILITY 2

document.querySelector('.eq-options__chooses-possibility-2-name').innerHTML = eq2.eqName
document.querySelector('.eq-options__chooses-possibility-2-price').innerHTML = eq2.eqPrice

// INTERNET

