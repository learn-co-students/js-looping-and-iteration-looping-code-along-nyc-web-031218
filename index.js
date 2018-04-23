// Code your solutions in this file
function printBadges(badge){
  for(let i = 0; i < badge.length; ++i){
  console.log('Welcome' + ` ${badge[i]}!` + ' You are employee ' + `#${i + 1}.`)
  };
  return badge
};

function tailsNeverFails(){
    tailsCounter = 0
    while(Math.round(Math.random())){
    tailsCounter += 1
  };
    return "You got" + ` ${tailsCounter}` + " tails in a row!"
};

// function maybeTrue () {
//   return Math.random() >= 0.5;
// }
//
// while (maybeTrue()) {
//   console.log('And I ran... I ran so far away!');
// }
//
//   for(let i = 0; i < Infinity; ++i){
//     let coinFlip = Math.floor(Math.random() * 2)
//     if (coinFlip === 1){
//       return "You got"+ `${i}` + "tails in a row!"
//     };
//   };
// };
