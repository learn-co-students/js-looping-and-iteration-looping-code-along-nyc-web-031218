// Code your solutions in this file
function printBadges(array) {
  for (i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i + 1}.`)
  }
  return array
}
function tailsNeverFails() {
  let counter = 0
  while (Math.random() >= 0.5) {
    counter += 1
  }
  return `You got ${counter} tails in a row!`
}

printBadges(['Lisa', 'Kaitlin', 'Jan'])
