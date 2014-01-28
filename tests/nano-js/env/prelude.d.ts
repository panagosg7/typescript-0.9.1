
/////////////////////////////
/// NanoJS prelude
/////////////////////////////

interface list<A> {
	data: A;
	next: any; 	
}

declare function mylength<A>(xs: list<A>): number;

declare function assert(boolean): void; 

declare function nth<A>(xs: list<A>, i: number): A;
