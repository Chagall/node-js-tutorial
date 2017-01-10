var shirt_factory = require('./shirt_factory')

// Creating a Prada T-Shirt and setting its properties values
var tShirt = shirt_factory();
tShirt.setBrand("Prada");
tShirt.setSize("Small");
tShirt.setColor("Grey");
tShirt.setMaterial("50% cotton / 50% poliester");

// Creating a Gucci Lumberjack Shirt and setting its properties values
var lumberjackShirt = shirt_factory();
lumberjackShirt.setBrand("Gucci");
lumberjackShirt.setSize("Large");
lumberjackShirt.setColor("Rouge");
lumberjackShirt.setMaterial("100% egyptian cotton");

// Logging the shirt's properties
tShirt.logPropertiesValues();
lumberjackShirt.logPropertiesValues();