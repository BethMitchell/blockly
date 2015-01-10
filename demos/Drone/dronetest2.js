var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff();
try {
  client.clockwise(0.5)
  .after(1000, function() {
  this.stop();
  });client.stop()
  .after(3000, function() {
  this.stop();
  });client.counterclockwise(0.5)
  .after(1000, function() {
  this.stop();
  });
}
finally {
  client.land();
}
