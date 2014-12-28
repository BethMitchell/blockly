'use strict';

goog.require('Blockly.JavaScript');

var arDrone = require('ar-drone');
var client  = arDrone.createClient();

Blockly.JavaScript['drone_control'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'program');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['take_off'] = function(block) {
  // This code causes the drone to take off.
  var code = 'client.takeoff';
  return code;
};

Blockly.JavaScript['drone_rotate'] = function(block) {
  var value_rotation = Blockly.JavaScript.valueToCode(block, 'rotation', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_which_direction = block.getFieldValue('which_direction');
  // This function causes the drone to rotate.
  var code = 'client
  .after(5000, function() {
    this.clockwise(0.25);
  })';
  return code;
};

Blockly.JavaScript['land'] = function(block) {
  // This code lands the drone.
  var code = 'client.land()  .after(3000, function() {
    this.stop();
    this.land();
  })';
  return code;
};
