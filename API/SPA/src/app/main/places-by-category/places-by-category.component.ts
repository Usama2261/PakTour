import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-places-by-category',
  templateUrl: './places-by-category.component.html',
  styleUrls: ['./places-by-category.component.css']
})
export class PlacesByCategoryComponent implements OnInit {

  categoryName: string = "";
  placeList: any[] = [];

  constructor(private _activatedRoute: ActivatedRoute, private _placeService: PlacesService) { }

  ngOnInit() {
    this.categoryName = this._activatedRoute.snapshot.paramMap.get('name') ?? "";
  }

  getPlacesByCategoryName(categoryName: string){
    this._placeService.getCategoryById(categoryName)
      .then((result: any) => {
        this.placeList = result;
      });
  }

}
