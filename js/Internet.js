class Internet {
    constructor(name, speedSent, speedDown, price) {
        this.name = name;
        this.speedSent = speedSent;
        this.speedDown = speedDown;
        this.price = price;
    }
}

const internet1 = new Internet('100 MEGA', '10 Mb/s', '5 Mb/s', '59 zł');
const internet2 = new Internet('150 MEGA', '15 Mb/s', '5 Mb/s', '65 zł');
const internet3 = new Internet('200 MEGA', '20 Mb/s', '5 Mb/s', '75 zł');
const internet4 = new Internet('300 MEGA', '30 Mb/s', '5 Mb/s', '85 zł');
const internet5 = new Internet('500 MEGA', '40 Mb/s', '5 Mb/s', '110 zł');