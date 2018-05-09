import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {AngularFireStorage} from 'angularfire2/storage';
import {LocationSearchService} from '../../services/location-search/location-search.service';
import {ClansByClantagType, LocationsType} from '../../../../generated/types';
import {ClanSearchService} from '../../../shared/services/clan-search/clan-search.service';
import {FilterModel} from './filter-model';

@Component({
  selector: 'app-clan-search',
  templateUrl: './clan-search.component.html',
  styleUrls: ['./clan-search.component.css']
})
export class ClanSearchComponent implements OnInit {

  public clanCastleUrl: Observable<string | null>;
  public ref = this.storage.ref('images/clan_castle.png');
  public locations: LocationsType[] = [];
  public warFrequency: string[] = ['always', 'moreThanOncePerWeek', 'oncePerWeek', 'lessThanOncePerWeek',
    'never', 'unknown'];

  public dataSource;
  public typeAheadLoading: boolean;
  public searchResult;

  public filterModel: FilterModel = new FilterModel();

  constructor(private router: Router, private clanSearchService: ClanSearchService,
              private storage: AngularFireStorage,
              private locationService: LocationSearchService) {
  }

  ngOnInit() {
    this.ref.getDownloadURL().subscribe(url => this.clanCastleUrl = url);
    this.locationService.getLocations().subscribe(locations => {
      for (const location of locations) {
        if (location.name !== '') {
          this.locations.push(location);
        }
      }
    });
    this.dataSource = Observable.create((observer: any) => {
      if (this.filterModel.choosedClanNameOrClanTag.length >= 3) {
        this.clanSearchService.getClanByClanTag(this.filterModel.choosedClanNameOrClanTag).subscribe(
          (result: ClansByClantagType) => {
            this.searchResult = [];
            this.searchResult.push(result);
            console.log(this.searchResult);
            observer.next(result);
          }, err => console.log(err));
      }
    }).mergeMap((token: string) => this.searchForClans(token));
  }

  searchForClans(token) {
    let query = new RegExp(token, 'ig');

    return Observable.of(
      this.searchResult.filter((clan: any) => {
        return query.test(clan);
      })
    );
  }

  logForm(value: any) {
    console.log(value);
  }

  changeTypeaheadLoading(e: boolean): void {
    this.typeAheadLoading = e;
  }

  onSubmit(value) {
    this.router.navigate(['search/' + value.playerId]);
  }
}
