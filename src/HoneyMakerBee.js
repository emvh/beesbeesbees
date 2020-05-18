var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
  };
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot--;
}

// HoneyMakerBee.prototype = {
//   constructor: HoneyMakerBee,
//   age: 10,
//   job: 'make honey',
//   honeyPot: 0,
//   makeHoney: function() {
//     this.honeyPot++;
//   },
//   giveHoney: function() {
//     this.honeyPot--;
//   }
// };





