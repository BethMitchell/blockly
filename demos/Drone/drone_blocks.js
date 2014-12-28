'use strict';

goog.require('Blockly.Blocks');

Blockly.Blocks['drone_control'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(210);
    this.appendDummyInput()
        .appendField("Take off");
    this.appendStatementInput("PROGRAM")
        .appendField("Do");
    this.appendDummyInput()
        .appendField("And then land");
    this.setTooltip('');
  }
};

Blockly.Blocks['drone_rotate'] = {
  init: function() {
      this.setHelpUrl('http://www.example.com/');
       this.setColour(160);
    this.appendDummyInput()
        .appendField("spin");
    this.appendValueInput("SPIN")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["clockwise", "R"], ["counterclockwise", "L"], ["option", "OPTIONNAME"]]), "which_direction")
        .appendField("for");
    this.appendDummyInput()
        .appendField(" seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['drone_up'] = {
  init: function() {
    this.setColour(80);
    this.setHelpUrl('http://www.example.com/');
    this.appendDummyInput()
        .appendField("fly up for");
    this.appendValueInput("UP")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(" seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['drone_down'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.appendDummyInput()
        .appendField("fly down for");
    this.appendValueInput("DOWN")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(" seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['drone_forward'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.appendDummyInput()
        .appendField("fly forward for");
    this.appendValueInput("FORWARD")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(" seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['drone_backward'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.appendDummyInput()
        .appendField("fly backward for");
    this.appendValueInput("BACKWARD")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(" seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['drone_right'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.appendDummyInput()
        .appendField("fly right for");
    this.appendValueInput("RIGHT")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(" seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['drone_left'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.appendDummyInput()
        .appendField("fly left for");
    this.appendValueInput("LEFT")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField(" seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
