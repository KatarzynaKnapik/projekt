class Count {
    constructor(){
        // this.periods = document.querySelectorAll('.period-choice > div')
        this.total_price = 0 
        this.period_months = 0
        this.tvPrice = 0
        this.internetPrice = 0

    }

    countPeriod(period) {
        this.period_months = parseInt(period.time) 
        console.log(this.period_months)
        this.countTotal()
    }

    countTelevision(tvPrice) {
        this.tvPrice = parseInt(tvPrice.price)
        console.log('tv: ', this.tvPrice)
        this.countTotal()
    }

    // countChanels() {

    // }

    // countAccessories() {

    // }

    // countEquipment() {

    // }

    countInternet(internetPrice) {
        this.internetPrice = parseInt(internetPrice.price)
        console.log('int: ', this.internetPrice)
        this.countTotal()
    }

    countTotal(){
        this.total_price = (this.tvPrice + this.internetPrice) * this.period_months;
        totalPrice.innerText = this.total_price
    }

}

const totalPrice = document.querySelector('.price-summary span')



const count = new Count()