'use strict';
const ariline = 'TAP Air Portugal';
const plane = 'A320';
// console.log(plane[0]);
// console.log(plane[1]);
// console.log('B737'[0]);
// console.log('B737'.length);
// console.log(plane.length);
// console.log(ariline.indexOf('r'));
// console.log(ariline.lastIndexOf('r'));
// console.log(ariline.indexOf('Portugal'));
// console.log(ariline.slice(4, 7).length);
console.log(ariline.slice(0, ariline.indexOf(' ')));
console.log(ariline.slice(ariline.lastIndexOf(' ') + 1, ariline.length));
console.log(ariline.slice(-2));
console.log(ariline.slice(1, -1));

// lets write a function that recieve a seat number and it will retrun if it is a middle seat or not ..
const checkMiddleSeat = function (seat) {
  //B and E are the middle seat

  let seatLetter = seat.slice(-1);
  seatLetter === 'B' || seatLetter == 'E'
    ? console.log(`You have recieved a middle seat, ${seat}`)
    : console.log(`You have not recieved a middle seat!`);
};
checkMiddleSeat('11E');

console.log(new String('Jonas'));
console.log(typeof new String('Jonas').slice(1));
