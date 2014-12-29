'use strict';

goog.require('Blockly.JavaScript');

Blockly.JavaScript['drone_control'] = function(block) {
    // This code causes the drone to take off.
    var code = 'client.takeoff()';
    code += '\n' + Blockly.JavaScript.statementToCode(block, 'PROGRAM');
    return code;
};

Blockly.JavaScript['drone_up'] = function(block) {
  // This function causes the drone to gain altitude for 3 seconds at quarter speed.
    var code = 'client.up(0.25)\n\
      .after(3000, function() {\n\
        this.stop();\n\
      });';
    return code;
};

Blockly.JavaScript['drone_hover'] = function(block) {
    // This code causes the drone to hover in place.
    var code = 'client.stop()';
    return code;
};
