import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Output() $onClick = new EventEmitter<string>();
	public click(a: string): void{
		this.$onClick.emit(a);
	}
	@Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }
  satType: string[] = ['Space Debris','Communication','Probe','Positioning','Space Station','Telescope'];

  countByType(type: string): number {
	let count = 0;
	if (this.satellites) {
	  for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].type === type || type === 'any') {
			count++;
		 }
	  }
	}
	return count;
 }


}