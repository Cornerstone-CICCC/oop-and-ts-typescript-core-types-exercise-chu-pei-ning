// Exercise: Create an enum `DaysOfWeek` with values for each day of the week.
// Then, write a function `isWeekend` that accepts a value from the enum and returns `true` if it's Saturday or Sunday, and `false` otherwise.

enum DaysOfWeek {
  Sunday,
  Monday,
  Tuseday,
  Wednesday,
  Thurseday,
  Friday,
  Saturday
}

function isWeekend(day: number): boolean {
  return day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday
}

console.log(isWeekend(DaysOfWeek.Saturday));
console.log(isWeekend(DaysOfWeek.Wednesday));
// Expected output:
// true
// false