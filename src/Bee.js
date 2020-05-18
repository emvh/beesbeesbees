var Bee = function() {
  Grub.call(this);
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
Bee.prototype = {
  age: 5,
  color: 'yellow',
  job: 'keep on growing';
  }
};