import { Injectable } from '@angular/core';
import { AppUtils } from '../helpers/app-utils';
import { AxioHelper } from '../helpers/axios-helper';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

constructor(private ax: AxioHelper, private utils: AppUtils) { }

getAllCategories(searchText: string): any {
  return this.ax
    .getAxiosWithHeaders()
    .get(
      `${this.utils.GetAPIBaseUrl()}/api/explore/GetExploreCategories`
    )
    .then((response: any) => {
      let result = response.data;
      return result;
    });
}

}
