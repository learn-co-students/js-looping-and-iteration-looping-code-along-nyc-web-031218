// Code your solutions in this file
function printBadges(names) {
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const msg = `Welcome ${name}! You are employee #${i + 1}.`
    console.log(msg);
  }

  return names;
}

function tailsNeverFails() {
  let counter = 0;

  function isTails() {
    return Math.random() >= 0.5;
  }

  while (isTails()) {
    counter++;
  }

  const msg = `You got ${counter} tails in a row!`
  return msg;
}
