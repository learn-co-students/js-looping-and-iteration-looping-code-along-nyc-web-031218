// Code your solutions in this file
function printBadges(names) {
  for (let i=0; i<names.length; i++) {
  console.log(`Welcome ${names[i]}! You are employee #${i+1}.`);
}
return names;
}



function Tails () {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let i = 0;
 while (Tails()) {
   i++;}
 return `You got ${i} tails in a row!`;
}
