class Animal {
    constructor(public name) { }
    move(meters) {
        alert(this.name + " moved " + meters + "m.");
    }
}

class Snake extends Animal {
    move() {
        alert("Slithering...");
        super.move(5);
    }
}

class Horse extends Animal {
    move() {
        alert("Galloping...");
        super.move(45);
    }

	constructor() {
		super("Horsie");
	}
}

var sam = new Snake("Sammy the Python");
var tom: Animal = new Horse();

sam.move();
tom.move(34);	
