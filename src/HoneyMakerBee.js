var HoneyMakerBee = function() {
};
HoneyMakerBee.prototype = Object.create(Grub.prototype);

HoneyMakerBee.prototype = {
  Bee.call(this);
  constructor: HoneyMakerBee,
  age: 10,
  job: 'make honey',
  honeyPot: 0,
  makeHoney: function() {
    this.honeyPot++;
  },
  giveHoney: function() {
    this.honeyPot--;
  }
};





