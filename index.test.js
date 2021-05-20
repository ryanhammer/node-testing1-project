const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  let input = {};
  let expected = {};
  beforeEach(() => {
    input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
  });
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const newObject = utils.trimProperties(input);
    expect(newObject).toEqual(expected);
    expect(input).not.toEqual(newObject);
  });
});

describe('[Exercise 2] trimPropertiesMutation', () => {
  let input = {};
  let expected = {};
  beforeEach(() => {
    input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
  });

  test('[3] returns an object with the properties trimmed', () => {
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  });
  test('[4] the object returned is the exact same one we passed in', () => {
    const newObject = utils.trimPropertiesMutation(input);
    expect(newObject).toEqual(expected);
    expect(input).toEqual(newObject);
  });
});

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects', () => {
    const testObjectOne = [{ integer: 2 }];
    const testObjectTwo = [{ integer: 3 }, { integer: -1 }, { integer: 80 }];
    const testAnswers = { answerOne: 2, answerTwo: 80 };
    expect(utils.findLargestInteger(testObjectOne)).toEqual(testAnswers.answerOne);
    expect(utils.findLargestInteger(testObjectTwo)).toEqual(testAnswers.answerTwo);
  });
});

describe('[Exercise 4] Counter', () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  });
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toEqual(3);
  });
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    expect(counter.countDown()).toEqual(3);
    expect(counter.countDown()).toEqual(2);
  });
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    expect(counter.countDown()).toEqual(3);
    expect(counter.countDown()).toEqual(2);
    expect(counter.countDown()).toEqual(1);
    expect(counter.countDown()).toEqual(0);
    expect(counter.countDown()).toEqual(0);
  });
});

describe('[Exercise 5] Seasons', () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  });
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toEqual('summer');
  });
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    expect(seasons.next()).toEqual('summer');
    expect(seasons.next()).toEqual('fall');
  });
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    expect(seasons.next()).toEqual('summer');
    expect(seasons.next()).toEqual('fall');
    expect(seasons.next()).toEqual('winter');
  });
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    expect(seasons.next()).toEqual('summer');
    expect(seasons.next()).toEqual('fall');
    expect(seasons.next()).toEqual('winter');
    expect(seasons.next()).toEqual('spring');
  });
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    expect(seasons.next()).toEqual('summer');
    expect(seasons.next()).toEqual('fall');
    expect(seasons.next()).toEqual('winter');
    expect(seasons.next()).toEqual('spring');
    expect(seasons.next()).toEqual('summer');
  });
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next();
    }
    expect(seasons.next()).toEqual('spring');
  })
});

describe('[Exercise 6] Car', () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  });
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive(100)).toEqual(100);
  });
  test('[16] driving the car uses gas', () => {
    expect(focus.drive(600)).toEqual(600);
    expect(focus.drive(100)).toEqual(600);
  });
  test('[17] refueling allows to keep driving', () => {
    expect(focus.drive(600)).toEqual(600);
    expect(focus.drive(100)).toEqual(600);
    expect(focus.refuel(0)).toEqual(0);
    expect(focus.refuel(25)).toEqual(600);
  });
  test('[18] adding fuel to a full tank has no effect', () => {
    expect(focus.refuel(0)).toEqual(600);
    expect(focus.refuel(25)).toEqual(600);
  });
});

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', () => {
    const expected = utils.isEvenNumberAsync(2)
      .then(result => {
        return result;
      })
      .catch(error => {
        return error.message
      });
    expect(expected).toEqual(true);
  })
  test.todo('[20] resolves false if passed an odd number')
  test.todo('[21] rejects an error with the message "number must be a number" if passed a non-number type')
  test.todo('[22] rejects an error with the message "number must be a number" if passed NaN')
})
