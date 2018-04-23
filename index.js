// Code your solutions in this file
function printBadges (badge) {
  for (let i = 0; i < badge.length; i++) {
    console.log(`Welcome ${badge[i]}! You are employee #${i+1}.`);
  }
  return badge;
}

function maybeTrue () {
  return Math.random() >= 0.5;
}

function tailsNeverFails () {
  let i = 0
  while (maybeTrue()) {
    i++;
  }
  return(`You got ${i} tails in a row!`);
}
