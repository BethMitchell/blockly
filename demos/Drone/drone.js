'use strict';

goog.require('Blockly.JavaScript');

// The way that client.after works in arDrone is that it puts the requested function in a queue
// and then returns control to the main program. All of the movement functions here
// make use of client.after so that they will be executed in the order that the programmer
// intends. Functions to access nav data or camera data will not need to use client.after.

// All of the movement functions take speed (between 0 and 1) as a parameter.  In this version,
// the speed is hard coded at 0.25 for up and down and 0.5 for all other movement. In addition,
// the length of time that each movement happens is hard coded at 1 or 3 seconds.

Blockly.JavaScript['drone_control'] = function(block) {
    // This code causes the drone to take off, try to execute the rest of the program, and then land.
    var code = '\
console.log("Taking off...");\n\
client.takeoff();\n\
client.after(3000, function() {\n\
   this.stop();\n\
});\n\
try {\n\
';
    code += Blockly.JavaScript.statementToCode(block, 'PROGRAM');
    code += '\
} finally {\n\
  client.after(0, function() {\n\
    console.log("Landing...");\n\
    this.land();\n\
  }).after(3000, function() {\n\
    process.exit(0);\n\
  });\n\
}\n';
    return code;
};

Blockly.JavaScript['drone_up'] = function(block) {
    // This function causes the drone to gain altitude for 1 second at quarter speed.
    var code = '\
client.after(0, function () {\n\
  console.log("Going up...");\n\
  this.up(0.25);\n\
}).after(1000, function() {\n\
  this.stop();\n\
});\n\
';
    return code;
};

Blockly.JavaScript['drone_down'] = function(block) {
    // This function causes the drone to lose altitude for 1 second at quarter speed.
    var code = '\
client.after(0, function () {\n\
  console.log("Coming down...");\n\
  this.down(0.25);\n\
}).after(1000, function() {\n\
  this.stop();\n\
});\n\
';
    return code;
};

Blockly.JavaScript['drone_forward'] = function(block) {
    // This function causes the drone to fly forward for 1 second at half speed.
    var code = '\
client.after(0, function () {\n\
  console.log("Flying forward...");\n\
  this.front(0.5);\n\
}).after(1000, function() {\n\
  this.stop();\n\
});\n\
';
    return code;
};

Blockly.JavaScript['drone_backward'] = function(block) {
    // This function causes the drone to fly backward for 1 second at half speed.
    var code = '\
client.after(0, function () {\n\
  console.log("Flying backward...");\n\
  this.back(0.5);\n\
}).after(1000, function() {\n\
  this.stop();\n\
});\n\
';
    return code;
};
    
Blockly.JavaScript['drone_right'] = function(block) {
    // This function causes the drone to fly right for 1 second at half speed.
    var code = '\
client.after(0, function () {\n\
  console.log("Flying right...");\n\
  this.right(0.5);\n\
}).after(1000, function() {\n\
  this.stop();\n\
});\n\
';
    return code;
};
    
Blockly.JavaScript['drone_left'] = function(block) {
    // This function causes the drone to fly left for 1 second at half speed.
    var code = '\
client.after(0, function () {\n\
  console.log("Flying left...");\n\
  this.left(0.5);\n\
}).after(1000, function() {\n\
  this.stop();\n\
});\n\
';
    return code;
};

Blockly.JavaScript['drone_hover'] = function(block) {
    // This function causes the drone to hover in place for 3 seconds.
    var code = '\
client.after(0, function() {\n\
  console.log("Hovering...");\n\
}).after(3000, function() {\n\
  this.stop();\n\
});\n\
';
    return code;
};

Blockly.JavaScript['drone_rotate'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_which_direction = block.getFieldValue('which_direction');
    // This function causes the drone to spin clockwise or counterclockwise at half speed for 5 seconds.
    var code = '';
    if (dropdown_which_direction == 'R'){
	code = '\
client.after(0, function() {\n\
  console.log("Spinning clockwise...");\n\
  this.clockwise(0.5);\n\
}).after(5000, function() {\n\
  this.stop();\n\
});\n\
'
    } else {
	code = '\
client.after(0, function() {\n\
  console.log("Spinning counterclockwise...");\n\
  this.counterClockwise(0.5);\n\
}).after(5000, function() {\n\
  this.stop();\n\
});\n\
'
    }
  return code;
};
