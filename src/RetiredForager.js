var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype = Object.create(Bee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead'
};
RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);

// // RetiredForagerBee.prototype = {
// //   // ForagerBee.call(this),
// //   constructor: RetiredForagerBee,
// //   age: 40,
// //   job: 'gamble',
// //   canFly: false,
// //   color: grey,
// //   forage: 'I am too old, let me play cards instead',
// //   gamble: function(treasure) {
// //     this.treasureChest.push(treasure);
// //   }
// // };
