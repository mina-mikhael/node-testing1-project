const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  test("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  test("[2] returns a copy, leaving the original object intact", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    utils.trimProperties(input);
    expect(input).toEqual({ foo: "  foo ", bar: "bar ", baz: " baz" });
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  test("[3] returns an object with the properties trimmed", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  test("[4] the object returned is the exact same one we passed in", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toBe(input);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  test("[5] returns the largest number in an array of objects { integer: 2 }", () => {
    const input = [{ integer: 1 }, { integer: 9 }, { integer: 7 }, { integer: 8 }];
    const actual = utils.findLargestInteger(input);
    expect(actual).toBe(9);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    expect(counter.countDown()).toBe(3);
  });
  test("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    counter.countDown();
    expect(counter.countDown()).toBe(2);
  });
  test("[8] the count eventually reaches zero but does not go below zero", () => {
    counter.countDown();
    counter.countDown();
    counter.countDown();
    counter.countDown();
    expect(counter.countDown()).toBe(0);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toBe("summer");
  });
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next();
    expect(seasons.next()).toBe("fall");
  });
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next();
    seasons.next();
    expect(seasons.next()).toBe("winter");
  });
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    expect(seasons.next()).toBe("spring");
  });
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    expect(seasons.next()).toBe("summer");
  });
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {
      seasons.next();
    }

    expect(seasons.next()).toBe("spring");
  });
});

describe("[Exercise 6] Car", () => {
  let accord;
  beforeEach(() => {
    accord = new utils.Car("accord", 20, 30); // each test must start with a fresh car
  });
  test("[15] driving the car returns the updated odometer", () => {
    expect(accord.drive(100)).toBe(100);
    expect(accord.drive(100)).toBe(200);
    expect(accord.drive(200)).toBe(400);
    expect(accord.drive(200)).toBe(600);
  });
  test("[16] driving the car uses gas", () => {
    accord.drive(accord.tankSize * accord.mpg);
    expect(accord.tank).toBe(0);
    accord.drive(100);
    expect(accord.tank).toBe(0);
  });
  test("[17] refueling allows to keep driving", () => {
    accord.drive(accord.tankSize * accord.mpg);
    accord.refuel(20);
    expect(accord.drive(300)).toBe(900);
    expect(accord.drive(500)).toBe(1200);
  });
  test("[18] adding fuel to a full tank has no effect", () => {
    accord.refuel(100);
    expect(accord.tank).toBe(accord.tankSize);
  });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  test("[19] resolves true if passed an even number", async () => {
    const result = await utils.isEvenNumberAsync(2);
    expect(result).toBe(true);
  });
  test("[20] resolves false if passed an odd number", async () => {
    const result = await utils.isEvenNumberAsync(3);
    expect(result).toBe(false);
  });

  test("[21] resolves to error msg if param is not a number", async () => {
    try {
      await utils.isEvenNumberAsync("string");
    } catch (err) {
      expect(err.message).toMatch(/You need to enter a Number/i);
    }
  });
});
