class Base { 
    constructor(x: any) {}
}

class Foo extends Base {
    constructor() {
        super(this);
    }
}
