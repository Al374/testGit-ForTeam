'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: [
    'Focaccia',
    'Bruschetta',
    'Garlic Bread',
    'Caprese Salad',
    'Bread',
  ],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
alert('hacked')

  orderDelivery: function ({
    time = '20:00',
    address = '',
    mainIndex = 1,
    starterIndex = 0,
  }) {
    let mainIndex1 = mainIndex;
    let starterIndex1 = starterIndex;
    let a, b;
    [a, b] = this.order(starterIndex1, mainIndex1);
    console.log(
      `Order Recieved! ${a},and ${b} will be delivered to ${address}, at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your declicious pasta with ${ing1}, ${ing2}and ${ing3}`
    );
  },
  orderPizza: function (mainIngradient, ...otherIngredients) {
    console.log(mainIngradient);
    console.log(otherIngredients);
  },

  // should have one main ingeradient and the rest are optional
};
const value = restaurant.mainMenu;
console.log(value);
// for (const days of Object.keys(openingHours)) console.log(days);
// const properties = Object.keys(openingHours);
// console.log(properties);
// //property values
// const values = Object.values(openingHours);
// // console.log(values);
// const keysValues = [...values, ...properties];
// console.log(keysValues);
// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const x of entries) {
  let [days, { open, close }] = x;
  // {open, close}=hours
  console.log(`On ${days}, we open at ${open} and close at ${close} `);
}

// we want to check for opennign hrs of our restaurant in monday
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
// restaurant.openingHours.fri && console.log(restaurant.openingHours.fri.open);

// //with optional chaining
// console.log(restaurant.openingHours?.fri?.open);
// console.log(restaurant.openingHours?.mon?.open);

//Example

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const openDay of days) {
//   const open = restaurant.openingHours[openDay]?.open ?? 'Closed';
//   // `Restaurant is open on ${openDay}`
//   open === 'Closed'
//     ? console.log(`On ${openDay}, We are closed.`)
//     : console.log(`On ${openDay}, we open at ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exisit ');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exisit ');

// Optional Chaining Array

// const users = [
//   /*{ name: 'Ali', email: 'hello@js.io' }*/
// ];
// // to get the 1st element of this array we can do :
// console.log(users[0]?.name);
// console.log(users[0]?.name ?? 'User array is empty');

// console.log(restaurant, '\n', openingHours);
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const [itemNumber, itemContent] of menu.entries()) {
//   // let [itemNumber, itemContent] = item;
//   console.log(`${itemNumber + 1}: ${itemContent}`);
// }
// // console.log(`${item[0] + 1} : ${item[1]}`)}
// // console.log(...menu.entries());

// // console.log(3 || 'Jones');
// // console.log('' || 'jonas');
// // console.log(true || 0);
// // console.log(undefined || null);
// // console.log(undefined || 0 || null || '' || 'hello');

// // console.log(0 && 'Jonas');

// // console.log(3 && 'Jones');
// // console.log('' && 'jonas');
// // console.log(true && 0);
// // console.log(undefined && null);
// // console.log('hello' && 23 && undefined && 0 && null && '');

// // restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');

// // const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(
// //   'weekend:' + JSON.stringify(sat),
// //   '\nWeekdays:' + JSON.stringify(weekdays)
// // );

// // const add = function (...numbers) {
// //   let sum = 0;
// //   for (let i = 0; i < numbers.length; i++) {
// //     sum += numbers[i];
// //   }
// //   console.log(sum);
// // };

// // add(1, 4, 5);
// // add(2, 3);
// // add(8, 5, 6, 1, 9, 0);

// //
// // const [h, , c, ...others1] = restaurant.starterMenu;
// // console.log(h, c, others1);

// // const ingredients = [
// //   prompt("les's make pasta! ingredient 1?"),
// //   prompt("les's make pasta! ingredient 2?"),
// //   prompt("les's make pasta! ingredient 3?"),
// // ];
// // console.log(ingredients);
// // restaurant.orderPasta(...ingredients);

// //objects
// // const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// // console.log(newRestaurant);
// // //SPREAD, because on RIGHT side of =
// // const arr = [1, 2, ...[3, 4]];

// // //REST, because on LEFT side of =
// // const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others);
// // // restaurant.orderDelivery({
// //   // time: '22:30',
// //   address: 'Via del Sole,21',
// //   // mainIndex: 2,
// //   // starterIndex: 2,
// // });

// //copy array
// // const mainMenuCopy = [...restaurant.mainMenu];
// // console.log(mainMenuCopy);
// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(menu);
// // const name = 'jonas';
// // const letters = [...name];
// // console.log(letters);

// const arr = [4, 6, 8];

// const badArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badArr);

// const goodArr = [1, 2, ...arr];
// console.log(goodArr);
// console.log(...goodArr);

// const newMain = ['Gnocci', ...restaurant.mainMenu];
// console.log(newMain);
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
// const { menu = [], name: restaurantName = [] } = restaurant;
// console.log(menu, restaurantName);

// //
// // let a = 111;
// // let b = 999;
// // const obj = { a: 23, b: 7, c: 14 };

// // ({ a, b } = obj);
// // console.log(a, b);
// const { fri } = restaurant.openingHours;
// const { open: o, close: c } = fri;
// console.log(o, c);
// const {
//   fri: { open: op, close: cl },
// } = restaurant.openingHours;
// console.log(op, cl);
// const arr = [1, 2, 3, 4];
// const a = arr[1];
// const b = arr[1];
// const c = arr[2];
// const d = arr[3];

// const [x, y, z] = arr;
// console.log(x, y, z);

// const [first, , thrid] = restaurant.categories;
// console.log(first, thrid);
// let [main, secondary] = restaurant.categories;
//if we want to change the main and secondary
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// let [starterOrder, mainOrder] = restaurant.order(2, 0);
// console.log(starterOrder, mainOrder);
// const nested = [1, 2, [4, 5]];
// const [x, , [a, b]] = nested;
// console.log(x, a, b);
// //default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
