export class Satellite {

	name: string;
	type: string;
	launchDate: string;
	orbitType: string;
	operational: boolean;

	constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
		this.name = name;
		this.type = type;
		this.launchDate = launchDate;
		this.orbitType = orbitType;
		this.operational = operational;
	}

	isSpaceDebris(): boolean {
		if (this.type === 'Space Debris') {
			return true;
		} else return false;
	}

	isEven(num: number): boolean{
		if (num % 2 === 0){
			return true;
		} else {
			return false;
	  }
	}
	isOrbitLow(): boolean {
		if (this.orbitType === "LOW"){
			return true;
		} else if (this.orbitType === "HIGH"){
			return false;
		} else return;
	}
}

// TODO 3a: fix isSpaceDebris check
