
function trimProperties(obj) {

  const newObj = {...obj};
  const keys = Object.keys(newObj);
  keys.forEach(key => {
    newObj[key] = newObj[key].trim();
  });
  return newObj;
}
// const testObject = { name: '  jane  ' };
// console.log(trimProperties(testObject));

function trimPropertiesMutation(obj) {

  const keys = Object.keys(obj);
  keys.forEach(key => {
    obj[key] = obj[key].trim();
  });
  return obj;
}

// console.log(trimPropertiesMutation(testObject));

function findLargestInteger(integers) {

  const largestInt = integers.reduce((highNum, currentNumObj) => {
    return Math.max(highNum, currentNumObj.integer);
  }, integers[0].integer);
  return largestInt;
}

// console.log(findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]));

class Counter {
  
  constructor(initialNumber) {
    this.initialNumber = initialNumber;
    this.count = initialNumber + 1;
  }

  countDown() {

    if (this.count > this.initialNumber) {
      this.count--;
      return this.count
    } else if (this.count > 0) {
      this.count--;
      return this.count;
    } else {
      return 0;
    }
  }
}

// const counter = new Counter(4);
// console.log(counter.countDown());
// console.log(counter.countDown());
// console.log(counter.countDown());
// console.log(counter.countDown());
// console.log(counter.countDown());

class Seasons {
  
  constructor() {
    this.season = 'spring';
  }

  next() {
    switch(this.season) {
      case 'spring':
        this.season = 'summer';
        break;
      case 'summer':
        this.season = 'fall';
        break;
      case 'fall':
        this.season = 'winter';
        break;
      case 'winter':
        this.season = 'spring';
        break;
      default:
        console.log('something went wrong in seasons.next');
    }
    return this.season;
  }
}

// const seasons = new Seasons();
// console.log(seasons.next());
// console.log(seasons.next());
// console.log(seasons.next());

class Car {
  
  constructor(name, tankSize, mpg) {
    this.name = name;
    this.odometer = 0; // car initilizes with zero miles
    this.tank = tankSize; // car initializes full of gas
    this.mpg = mpg;
    this.milesToEmpty = tankSize * mpg;
    this.tankSize = tankSize;
  }

  drive(distance) {

    if (this.milesToEmpty > 0 && this.milesToEmpty >= distance) {
      this.odometer += distance;
      this.milesToEmpty -= distance;
      this.tank = this.milesToEmpty / this.mpg;
    } else if (this.milesToEmpty > 0 && this.milesToEmpty < distance) {
      this.odometer += this.milesToEmpty;
      this.milesToEmpty = 0;
      this.tank = 0;
    } else {
      console.log("The car is out of gas");
    }
    return this.odometer;

  }
  
  refuel(gallons) {

    if (gallons < 0) {
      return "Invalid amount of gas"
    } else if (gallons > this.tankSize || gallons > (this.tankSize - this.tank)) {
      this.tank = this.tankSize;
      this.milesToEmpty = this.tank * this.mpg;
    } else {
      this.tank += gallons;
      this.milesToEmpty = this.tank * this.mpg;
    }
    return this.milesToEmpty;
  }
}

// const focus = new Car('focus', 20, 30);
// console.log(focus.drive(100));
// console.log(focus.drive(200));
// console.log(focus.drive(600));
// console.log(focus.drive(10));
// console.log(focus.refuel(40));


const isEvenNumberAsync = async (number) => {

  const type = typeof number;
  const error = {};
  if (type !== "number" || isNaN(number)) {
    error.message = 'number must be a number';
    throw error;
  } else {
    const result = (number % 2  === 0) ? true : false;
    return result;
  }
}

isEvenNumberAsync(NaN)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error.message);
  })

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car
}
