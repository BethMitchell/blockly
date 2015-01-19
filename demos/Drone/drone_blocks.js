'use strict';

goog.require('Blockly.Blocks');

Blockly.Blocks['drone_control'] = {
  init: function() {
    this.setHelpUrl('NULL');
    this.setColour(10);
    this.appendDummyInput()
        .appendField("take off");
    this.appendStatementInput("PROGRAM")
        .appendField("do");
    this.appendDummyInput()
        .appendField("and then land");
    this.setTooltip('');
  }
};

Blockly.Blocks['drone_rotate'] = {
  init: function() {
    this.setHelpUrl('NULL');
      this.setColour(340);
      this.appendDummyInput()
        .appendField("spin")
        .appendField(new Blockly.FieldDropdown([["clockwise", "R"], ["counterclockwise", "L"]]), "which_direction");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['drone_up'] = {
  init: function() {
    this.setHelpUrl('NULL');
      this.setColour(65);
    this.appendDummyInput()
        .appendField("fly up");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['drone_down'] = {
  init: function() {
    this.setHelpUrl('NULL');
      this.setColour(65);
      this.appendDummyInput()
        .appendField("fly down");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['drone_forward'] = {
  init: function() {
    this.setHelpUrl('NULL');
      this.setColour(65);
      this.appendDummyInput()
        .appendField("fly forward");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['drone_backward'] = {
  init: function() {
    this.setHelpUrl('NULL');
      this.setColour(65);
      this.appendDummyInput()
        .appendField("fly backward");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['drone_right'] = {
  init: function() {
    this.setHelpUrl('NULL');
      this.setColour(65);
      this.appendDummyInput()
        .appendField("fly right");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['drone_left'] = {
  init: function() {
    this.setHelpUrl('NULL');
      this.setColour(65);
      this.appendDummyInput()
        .appendField("fly left");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['drone_hover'] = {
  init: function() {
    this.setHelpUrl('NULL');
      this.setColour(300);
      this.appendDummyInput()
        .appendField("hover");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['drone_blink_lights'] = {
  init: function() {
    this.setColour(230);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["blink red", "red"], ["blink green", "green"], ["blink orange", "orange"]]), "LED_pattern");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
