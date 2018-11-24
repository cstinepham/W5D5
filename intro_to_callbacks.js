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
    setInterval(this._tick(), 1000)

  }

   printTime() {
    console.log(`${hours}:${mins}:${secs}`);
  }

   _tick() {
    setInterval(printTime, 1000);
  }

  incementSeconds(){
    this.secs += 1
  }

  incrementMinutes(){
    this.mins += 1
  }

  incrementHours(){
    this.hours += 1
  }

}

const clock = new Clock();
