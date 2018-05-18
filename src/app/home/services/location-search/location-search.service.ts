import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {LocationsType} from '../../../../generated/types';
import {map} from 'rxjs/operators';

@Injectable()
export class LocationSearchService {

  public static LOCATIONURL = 'v1/locations/';
  private location: LocationsType[];

  constructor(private http: HttpClient) {
  }

  getLocations(): Observable<LocationsType[]> {
    if (this.hasCacheClan()) {
      return Observable.of(this.location);
    } else {
      return this.http.get<any>(LocationSearchService.LOCATIONURL).pipe(map((data: any) => {
          this.location = data.items.filter(location => location.name !== '');
          return this.location;
        }));
    }
  }

  private hasCacheClan() {
    return this.location;
  }
}
