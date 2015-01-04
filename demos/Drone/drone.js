'use strict';

goog.require('Blockly.JavaScript');

Blockly.JavaScript['drone_control'] = function(block) {
    // This code causes the drone to take off, try to execute the rest of the program, and then land.
    var code = 'client.takeoff();\ntry {';
    code += '\n' + Blockly.JavaScript.statementToCode(block, 'PROGRAM');
    code += '} finally {\n  client.land();\n}\n';
    return code;
};

Blockly.JavaScript['drone_up'] = function(block) {
  // This function causes the drone to gain altitude for 1 second at quarter speed.
    var code = 'client.up(0.25)\n\
      .after(1000, function() {\n\
        this.stop();\n\
      });\n';
    return code;
};

Blockly.JavaScript['drone_down'] = function(block) {
  // This function causes the drone to lose altitude for 1 second at quarter speed.
    var code = 'client.down(0.25)\n\
      .after(1000, function() {\n\
        this.stop();\n\
      });';
    return code;
};

Blockly.JavaScript['drone_forward'] = function(block) {
  // This function causes the drone to fly forward for 1 second at quarter speed.
    var code = 'client.front(0.25)\n\
      .after(1000, function() {\n\
        this.stop();\n\
      });';
    return code;
};

Blockly.JavaScript['drone_backward'] = function(block) {
  // This function causes the drone to fly backward for 1 second at quarter speed.
    var code = 'client.back(0.25)\n\
      .after(1000, function() {\n\
        this.stop();\n\
      });';
    return code;
};

Blockly.JavaScript['drone_right'] = function(block) {
  // This function causes the drone to fly right for 1 second at quarter speed.
    var code = 'client.right(0.25)\n\
      .after(1000, function() {\n\
        this.stop();\n\
      });';
    return code;
};

Blockly.JavaScript['drone_left'] = function(block) {
  // This function causes the drone to fly left for 1 second at quarter speed.
    var code = 'client.left(0.25)\n\
      .after(1000, function() {\n\
        this.stop();\n\
      });';
    return code;
};

Blockly.JavaScript['drone_hover'] = function(block) {
    // This function causes the drone to hover in place for 3 seconds.
    var code = 'client.stop()\n\
.after(3000, function() {\n\
this.stop();\n\
});';
    return code;
};

Blockly.JavaScript['drone_rotate'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_which_direction = block.getFieldValue('which_direction');
    // This function causes the drone to spin clockwise or counterclockwise for 1 second.
    var code = '';
    if (dropdown_which_direction == 'R'){
	var code = 'client.clockwise(0.5)\n\
.after(1000, function() {\n\
this.stop();\n\
});';
    }
    else {var code = 'client.counterclockwise(0.5)\n\
.after(1000, function() {\n\
this.stop();\n\
});';
    }
  return code;
};
