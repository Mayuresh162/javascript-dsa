// Write a simple traffic light simulation using JavaScript and the 'config' variable below.

// The traffic light controls an intersection with multiple streets, see 'config.streetNames'. Only one street is given green light at any given time. This street lets 'config.numberOfCarsPassThroughIntersectionPerSecond' cars pass through the intersection.

// For the switching green, these rules apply in declining priority:

// 1. Rule: Each green phase has to be at least 'config.minGreenDurationInMilliSeconds' long, unless there are no cars going through the green light.

// 2. Rule: When a street has waited config.maxWaitForGreenInMilliSeconds' or longer it should receive green.

// 3. Rule: When a street has 'config.carsForGreen' or more cars waiting it should receive green.

// 4. Rule: When all cars have passed through green, the street that has waited the longest and has cars queued should receive green.

// A function 'addCar(streetIndex)' is used to queue cars at the intersection. The function is called from somewhere else outside this scope. You can assume no thread related issues.

// */

const config = {
  // A green phase must be at least this long
  minGreenDurationInMilliSeconds: 10000,
  // Every second this many cars go through the green light
  numberOfCarsPassThroughIntersectionPerSecond: 1,
  // If a street waited this long or longer, it should receive green
  maxWaitForGreenInMilliSeconds: 30000,
  // Number of cars that will give a street priority for the next green
  carsForGreen: 3,
  // The streets for this intersection:
  streetNames: ['A', 'B', 'C'],
}

let i = 0;

// State for each street
const streets = config.streetNames.map((name) => ({
  name,
  queue: 0,
  lastGreenTime: Date.now(),
}));

let currentGreen = 0; // index of active green street
let greenStartedAt = Date.now();

// External function to add cars
function addCar(streetIndex) {
  if (streets[streetIndex]) {
    streets[streetIndex].queue++;
    console.log(`Car added to ${streets[streetIndex].name}`);
  }
}

// Main simulation
function simulateTraffic() {
  setInterval(() => {
    const now = Date.now();
    const currentStreet = streets[currentGreen];

    // Cars pass through current green every second
    if (currentStreet.queue > 0) {
      currentStreet.queue = Math.max(
        0,
        currentStreet.queue - config.numberOfCarsPassThroughIntersectionPerSecond
      );
      console.log(
        `${currentStreet.name} GREEN -> ${currentStreet.queue} cars remaining`
      );
    }

    decideNextGreen(now);
  }, 1000);
}

// Decide next signal based on rules
function decideNextGreen(now) {
  const currentStreet = streets[currentGreen];
  const greenDuration = now - greenStartedAt;

  const minGreenSatisfied =
    greenDuration >= config.minGreenDurationInMilliSeconds ||
    currentStreet.queue === 0;

  if (!minGreenSatisfied) return;

  let nextStreet = null;

  // Rule 2: waited too long
  nextStreet = streets.findIndex(
    (street, idx) =>
      idx !== currentGreen &&
      street.queue > 0 &&
      now - street.lastGreenTime >= config.maxWaitForGreenInMilliSeconds
  );

  // Rule 3: enough cars waiting
  if (nextStreet === -1 || nextStreet === null) {
    nextStreet = streets.findIndex(
      (street, idx) =>
        idx !== currentGreen &&
        street.queue >= config.carsForGreen
    );
  }

  // Rule 4: longest waiting street with cars
  if (nextStreet === -1 || nextStreet === null) {
    let maxWait = -1;
    streets.forEach((street, idx) => {
      if (idx !== currentGreen && street.queue > 0) {
        const wait = now - street.lastGreenTime;
        if (wait > maxWait) {
          maxWait = wait;
          nextStreet = idx;
        }
      }
    });
  }

  // Switch if valid street found
  if (nextStreet !== -1 && nextStreet !== null) {
    switchGreen(nextStreet);
  }
}

// Change green signal
function switchGreen(nextIndex) {
  streets[currentGreen].lastGreenTime = Date.now();

  currentGreen = nextIndex;
  greenStartedAt = Date.now();

  console.log(
    `\n=== GREEN switched to ${streets[currentGreen].name} ===`
  );

  if (currentGreen === 0) controlTrafficForSignalA();
  if (currentGreen === 1) controlTrafficForSignalB();
  if (currentGreen === 2) controlTrafficForSignalC();
}

// Optional handlers
function controlTrafficForSignalA() {
  console.log("Signal A active");
}

function controlTrafficForSignalB() {
  console.log("Signal B active");
}

function controlTrafficForSignalC() {
  console.log("Signal C active");
}

// Start simulation
simulateTraffic();

// Example traffic
setTimeout(() => addCar(0), 1000);
setTimeout(() => addCar(1), 2000);
setTimeout(() => addCar(1), 3000);
setTimeout(() => addCar(1), 4000);
setTimeout(() => addCar(2), 5000);
