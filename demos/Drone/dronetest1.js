var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff();

/* client.stop();*/
client.after(3000, function() {
    this.stop();
});

client.after(1000, function() {
    this.land();
});

// client.stop();
// client.land();
