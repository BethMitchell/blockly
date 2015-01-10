var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff();
client.after(1000, function() {
    this.stop();
});

try {
    /* This is the code for hover. */
    client.after(3000, function() {
	console.log("Hovering!");
	this.stop();
    });

    /* This is the code for spin. */
    client.after(0, function() {
	this.clockwise(0.5);
    }).after(3000, function() {
	this.stop();
    });

    /* This is probably not better code for spin. */
    client.clockwise(0.5);
    client.after(3000, function() {
	this.stop();
    });
}
finally {
    /* This is the code for land.  */
    client.after(0, function() {
	this.land();
    });
}
