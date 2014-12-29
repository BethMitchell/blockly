'use strict';

goog.require('Blockly.JavaScript');

var arDrone = require('ar-drone');
var client  = arDrone.createClient();

Blockly.JavaScript['drone_control'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'program');
    // This code causes the drone to take off.
    var code = 'client.takeoff()';
    return code;
};

Blockly.JavaScript['drone_up'] = function(block) {
  // This function causes the drone to gain altitude for 3 seconds at quarter speed.
    var code = 'client
.after(250, function() {
this.up(0.25);
})
.after(3000, function() {
this.stop();
});';
    return code;
};

Blockly.JavaScript['drone_hover'] = function(block) {
    // This code causes the drone to hover in place.
    var code = 'client.stop()';
    return code;
};
