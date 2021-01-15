class Clock {
    constructor() {
        this.dateobject = new Date();
        this.hours = this.dateobject.getHours();
        this.minutes = this.dateobject.getMinutes();
        console.log(`${this.hours}:${this.minutes}`);
    }


    tick() {
        // console.log(`${this.hours}:${this.minutes}`);
        this.minutes += 1;
        if(this.minutes === 60) {
            this.minutes = 0;
            this.hours += 1;
        }

        if(this.hours === 24) {
            this.hours = 0;
        }
        console.log(`${this.hours}:${this.minutes}`);
        // console.log(this)
    }

    startClock() {
        setInterval(this.tick.bind(this), 60000);
    }
}


let c = new Clock();
// console.log(c.dateobject);
// console.log(c.hours);
// console.log(c.minutes);
//  console.log(c.tick());
c.startClock();
