class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    const date = new Date();
    this.hours = date.getHours();
    this.mins = date.getMinutes();
    this.secs = date.getSeconds();


    this.printTime();
    setInterval(this._tick.bind(this), 1000);

  }

   printTime() {
    console.log(`${this.hours}:${this.mins}:${this.secs}`);
  }

   _tick() {
     this.incrementSeconds();
     this.printTime();
  }

  incrementSeconds(){
    this.secs += 1
    if (this.secs === 60) {
      this.secs = 0;
      this.incrementMinutes();
    }
  }

  incrementMinutes(){
    this.mins += 1
    if (this.mins === 60) {
      this.mins = 0;
      this.incrementHours();
    }
  }

  incrementHours(){
    this.hours += 1
    if (this.hours === 24) {
      this.hours = 0
    }
  }

}

const clock = new Clock();
