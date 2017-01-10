/*
	This is the method that generates a shirt
*/
function Shirt() {
	// A shirt has a brand, a size, a color and the material of which it is made
	this.brand =  "",
	this.size =  "",
	this.color =  "",
	this.material = ""

	// Setters
	this.setBrand = function setBrand(brand) {
		this.brand = brand;
	}

	this.setSize = function setSize(size) {
		this.size = size;
	}

	this.setColor = function setColor(color) {
		this.color = color;
	}

	this.setMaterial = function setMaterial(material) {
		this.material = material;
	}

	// Logs the properties values of a shirt on the console 
	this.logPropertiesValues = function logPropertiesValues() {
		console.log('\nShirt Properties\n');
		console.log('Brand: ' + this.brand);
		console.log('Size: ' + this.size);
		console.log('Color: ' + this.color);
		console.log('Material: ' + this.material);
	}
}

/*
	This is the Shirt Factory that generates a new shirt object
	for the files that require this module
*/
module.exports = function() {
	return new Shirt();
};
