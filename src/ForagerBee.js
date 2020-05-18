var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};

// // ForagerBee.prototype = {
// //   constructor: ForagerBee,
// //   age: 10,
// //   job: 'find pollen',
// //   canFly: true,
// //   treasureChest: [],
// //   forage: function(treasure) {
// //     this.treasureChest.push(treasure);
// //   }
// };


// // ForagerBee.prototype.constructor = ForagerBee;

// // ForagerBee.age = 10;
// // ForagerBee.job = 'find pollen';
// // ForagerBee.canFly = true;
// // ForagerBee.treasureChest = [];
// // ForagerBee.forage = function(treasure) {
// //   this.treasureChest.push(treasure);
// // };


