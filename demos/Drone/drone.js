'use strict';

goog.require('Blockly.JavaScript');

Blockly.JavaScript['drone_up'] = function(block) {
  // This function causes the drone to gain altitude for 3 seconds at quarter speed.
    var code = 'client.up(0.25)\n\
      .after(3000, function() {\n\
        this.stop();\n\
      });';
    return code;
};

Blockly.JavaScript['drone_down'] = function(block) {
  // This function causes the drone to lose altitude for 3 seconds at quarter speed.
    var code = 'client.down(0.25)\n\
      .after(3000, function() {\n\
        this.stop();\n\
      });';
    return code;
};

Blockly.JavaScript['drone_forward'] = function(block) {
  // This function causes the drone to fly forward for 3 seconds at quarter speed.
    var code = 'client.front(0.25)\n\
      .after(3000, function() {\n\
        this.stop();\n\
      });';
    return code;
};

Blockly.JavaScript['drone_backward'] = function(block) {
  // This function causes the drone to fly backward for 3 seconds at quarter speed.
    var code = 'client.back(0.25)\n\
      .after(3000, function() {\n\
        this.stop();\n\
      });';
    return code;
};

Blockly.JavaScript['drone_right'] = function(block) {
  // This function causes the drone to fly right for 3 seconds at quarter speed.
    var code = 'client.right(0.25)\n\
      .after(3000, function() {\n\
        this.stop();\n\
      });';
    return code;
};

Blockly.JavaScript['drone_left'] = function(block) {
  // This function causes the drone to fly left for 3 seconds at quarter speed.
    var code = 'client.left(0.25)\n\
      .after(3000, function() {\n\
        this.stop();\n\
      });';
    return code;
};

Blockly.JavaScript['drone_hover'] = function(block) {
    // This code causes the drone to hover in place for 3 seconds.
    var code = 'client.stop()\n\
.after(3000, function() {\n\
this.stop();\n\
});';
    return code;
};
