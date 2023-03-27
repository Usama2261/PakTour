import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-places',
  templateUrl: './my-places.component.html',
  styleUrls: ['./my-places.component.css']
})
export class MyPlacesComponent implements OnInit {

  display: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  addPlace(){
    this.display = true;
  }

}
