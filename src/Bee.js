var Bee = function() {
};

Bee.prototype = Object.create(Grub.prototype);
// Bee.prototype.constructor = Bee;
Bee.prototype = {
  Grub.call(this);
  constructor: Bee,
  age: 5,
  color: 'yellow',
  job: 'keep on growing';
};