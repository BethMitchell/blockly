var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff();
try {
  client.stop()
  .after(3000, function() {
  this.stop();
  });
}
finally {
  client.land();
}
