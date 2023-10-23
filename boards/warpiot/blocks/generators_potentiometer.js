
/*  Blockly.Python['set_color'] = function(block) {
     var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
     var code = `np.fill(${value_color})\nnp.write()\n`;
     return code;
 };*/;

Blockly.Python['potentiometer'] = function(block) {
     Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin, ADC';
     Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';
    
     var value_potentio_pin = Blockly.Python.valueToCode(block, 'potentio_pin', Blockly.Python.ORDER_ATOMIC);
     Blockly.Python.definitions_['potent'] = `potentiometer_pin = ${value_potentio_pin}`;

     var value_neopixel_pin = Blockly.Python.valueToCode(block, 'neopixel_pin', Blockly.Python.ORDER_ATOMIC);
     Blockly.Python.definitions_['neopix'] = `neopixel_pin = ${value_neopixel_pin}`;
     var value_numpixel_pin = Blockly.Python.valueToCode(block, 'num_pixel', Blockly.Python.ORDER_ATOMIC);
     Blockly.Python.definitions_['numpix'] = `num_pixel = ${value_numpixel_pin}`;
     /*Blockly.Python.definitions_['neopix'] = `neopixel_pin = ${value_potentio_pin}`;
     Blockly.Python.definitions_['numpix'] = `num_pixel = ${value_potentio_pin}`;*/    
     Blockly.Python.definitions_['np'] = `np = neopixel.NeoPixel(Pin(neopixel_pin), num_pixels)`;
     Blockly.Python.definitions_['adc'] = `adc = ADC(Pin(potentiometer_pin))\nadc.atten(ADC.ATTN_11DB)`;
     var functionName = Blockly.Python.provideFunction_(
        'set_color',
        ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(color):',
        '                            ',
        '  for i in range(num_pixels)',
        '      np[i] = color',]); 

     var code = `np.fill(${value_potentio_pin})\nnp.write()\n`;
     var code = `try:\n    while True:\n        \n        pot_value = adc.read()\n        \n        \n        red = int(pot_value * 255 / 2095)\n        green = int((pot_value + 1000) * 255 / 3795)\n        blue = int((pot_value + 1500) * 255 / 5395)\n        \n        \n        color = (red, green, blue)\n        \n        \n        set_color(color)\n\n        \n        np.write()    \nexcept:\n    np.fill((0, 0, 0))\n    np.write()\n`;
     return code;
};

 /*Blockly.Python['set_color'] = function(block) {
    var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
    var code = `np.fill(${value_color})\nnp.write()\n`;
    return code;
};

Blockly.Python['potentiometer'] = function(block) {
    Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin, ADC';
    Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';

    var value_pot_pin = Blockly.Python.valueToCode(block, 'potentiometer_pin', Blockly.Python.ORDER_ATOMIC);
    var value_pixel_pin = Blockly.Python.valueToCode(block, 'neopixel_pin', Blockly.Python.ORDER_ATOMIC);
    var value_num_pixels = Blockly.Python.valueToCode(block, 'num_pixels', Blockly.Python.ORDER_ATOMIC);
    Blockly.Python.definitions_['np'] = `np = neopixel.NeoPixel(Pin(${value_pixel_pin}), ${value_num_pixels})`;
    Blockly.Python.definitions_['adc'] = `adc = ADC(Pin(${value_pot_pin}))\nadc.atten(ADC.ATTN_11DB)`;

    var code = `np.fill(${value_potentio_pin})\nnp.write()\n`;
    var code = `try:\n    while True:\n        pot_value = adc.read()\n        red = int(pot_value * 255 / 2095)\n        green = int((pot_value + 1000) * 255 / 3795)\n        blue = int((pot_value + 1500) * 255 / 5395)\n        color = (red, green, blue)\n        set_color(color)\nexcept:    np.fill((0, 0, 0))\n    np.write()\n`;
    return code;
};*/