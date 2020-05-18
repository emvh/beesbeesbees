var RetiredForagerBee = function() {
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
RetiredForagerBee.prototype.age = 40;

RetiredForagerBee.prototype = {
  // ForagerBee.call(this),
  // constructor: RetiredForagerBee,
  // age: 40
// //   job: 'gamble',
// //   canFly: false,
// //   color: grey,
// //   forage: 'I am too old, let me play cards instead',
// //   // gamble: function(treasure) {
// //   //   this.treasureChest.push(treasure)
// //   // }
};
