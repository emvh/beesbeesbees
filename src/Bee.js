var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

// Bee.prototype = {
// Grub.call(this);
//   constructor: Bee,
//   age: 5,
//   color: 'yellow',
//   job: 'keep on growing'
// };