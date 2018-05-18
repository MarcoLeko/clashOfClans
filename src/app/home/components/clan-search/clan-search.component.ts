import {Component, EventEmitter, OnInit} from '@angular/core';
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

  public dataSource: Observable<ClansByClantagType[]>;
  public searchResult: ClansByClantagType[] = [];
  public filterModel: FilterModel = new FilterModel();
  public formChanges: EventEmitter<FilterModel> = new EventEmitter<FilterModel>();

  constructor(private router: Router, private clanSearchService: ClanSearchService,
              private storage: AngularFireStorage,
              private locationService: LocationSearchService) {
  }

  ngOnInit() {
    this.ref.getDownloadURL().subscribe(url => this.clanCastleUrl = url);
    this.locationService.getLocations().subscribe(locations => this.locations = locations);
    this.dataSource = Observable.create((observer: any) => this.formChanges.debounceTime(300)
      .subscribe(() => this.getClan(observer))).mergeMap(() => {
      return Observable.of(this.searchResult);
    });
  }

  private getClan(observer: any) {
    if (this.filterModel.selectedClanNameOrClanTag.length >= 3) {
      this.clanSearchService.getClanByClanTag(this.filterModel.selectedClanNameOrClanTag).subscribe(
        (result: ClansByClantagType) => {
          this.searchResult = [];
          this.searchResult.push(result);
          observer.next(result);
        }, () => this.getClanByFilter(observer));
    }
  }

  getClanByFilter(observer: any) {
    this.clanSearchService.getClansByFilterValues(this.filterModel).subscribe(
      (result: ClansByClantagType[]) => {
        this.searchResult = [];
        this.searchResult = result;
        observer.next(result);
      });
  }

  onSubmit(value) {
    console.log(value);
  }

  formChange(value) {
    this.formChanges.emit(value);
  }
}
