export function getRange(start, end, step = 1) {
  const stepGuard = typeof step === "number" && step !== 0 ? step : 1;
  let range = [];
  for (let i = 0; i < (end - start) / stepGuard; i++) {
    range.push(start + i * stepGuard);
  }
  return range;
}

export function randomInteger(start, end) {
  return start + Math.floor((Math.random() * (end - start)) % (end - start));
}

function inRange(start, end, test) {
  return test >= start && test <= end;
}