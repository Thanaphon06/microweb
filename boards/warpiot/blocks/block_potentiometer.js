Blockly.defineBlocksWithJsonArray([
  /*{
   "type": "potentiometer",
     "message0": "Ptm pin %1 read potentiometer",
     "args0": [
       {
         "type": "input_value",
         "name": "potentio_pin",
         "check":"Number"
       },
     ],
     "inputsInline": true,
     "output": "Number",
     "colour": "#8E44AD",
     "tooltip": "",
     "helpUrl": ""
   },*/
   {
    "type": "potentiometer",
    "message0": "Ptm pin %1 neopix pin %2 length %3 read potentiometer",
    "args0": [
      {
        "type": "input_value",
        "name": "potentio_pin",
        "check": [
          "Boolean",
          "Number"
        ]
      },
      {
        "type": "input_value",
        "name": "neopixel_pin",
        "check": [
          "Boolean",
          "Number"
        ]
      },
      {
        "type": "input_value",
        "name": "num_pixel",
        "check": [
          "Boolean",
          "Number"
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#E67E22",
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "set_color",
    "message0": "NeoPixel fill color %1",
    "args0": [
      {
        "type": "field_colour",
        "name": "color",
        "colour": "#E67E22"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": "#E67E22",
    "tooltip": "",
    "helpUrl": ""
  },
]);



