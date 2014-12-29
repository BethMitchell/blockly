'use strict';

goog.require('Blockly.Blocks');

Blockly.Blocks['drone_control'] = {
  init: function() {
    this.setHelpUrl('NULL');
    this.setColour(10);
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
    this.setHelpUrl('NULL');
      this.setColour(160);
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
        .appendField("fly up");
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
