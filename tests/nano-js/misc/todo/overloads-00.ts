interface Accessor { }

function attr(name: string): string;
function attr(name: string, value: string): number;
function attr(map: any): number;
function attr(nameOrMap: any, value?: string): any {
	if (nameOrMap && typeof nameOrMap === "string") {
		// handle string case 
	}
	else {
		// handle map case 
	}
} 