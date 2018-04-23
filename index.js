// Code your solutions in this file

function printBadges (names) {
  for (let i = 0; i < names.length; i++) {
      console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
  }
  return names
}

function tailsNeverFails () {
  function flip () {
    return Math.random() >= 0.5;
  }
  let i = 0
  while (flip()) {
    i++
  }
  return `You got ${i} tails in a row!`
}

/*

tailsNeverFails();
// => "You got 3 tails in a row!"

tailsNeverFails();
// => "You got 0 tails in a row!"

tailsNeverFails();
// => "You got 5 tails in a row!"

*/
