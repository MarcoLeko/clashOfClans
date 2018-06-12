import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {AngularFireStorage} from 'angularfire2/storage';
import {LocationSearchService} from '../../services/location-search/location-search.service';
import {ClansByClantagType, LocationsType} from '../../../../generated/types';
import {ClanSearchService} from '../../../shared/services/clan-search/clan-search.service';
import {FilterModel} from './filter-model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime, map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-clan-search',
  templateUrl: './clan-search.component.html',
  styleUrls: ['./clan-search.component.css']
})
export class ClanSearchComponent implements OnInit {

  public clanForm: FormGroup;
  public clanCastleUrl: Observable<string | null>;
  public ref = this.storage.ref('images/clan_castle.png');
  public locations: LocationsType[] = [];
  public warFrequency: string[] = ['always', 'moreThanOncePerWeek', 'oncePerWeek', 'lessThanOncePerWeek',
    'never', 'unknown'];

  public dataSource: Observable<ClansByClantagType[]>;
  public typeaheadLoading: boolean;
  public searchResult: ClansByClantagType[] = [];
  public filterModel
    = new FilterModel(null, null, null,
    null, null, null);

  constructor(private router: Router, private clanSearchService: ClanSearchService,
              private storage: AngularFireStorage, private forms: FormBuilder,
              private locationService: LocationSearchService) {
    this.clanForm = this.forms.group(this.filterModel);
  }

  ngOnInit() {
    this.ref.getDownloadURL().subscribe(url => this.clanCastleUrl = url);
    this.locationService.getLocations().subscribe(locations => this.locations = locations);
    this.clanForm.valueChanges.subscribe((value: FilterModel) => {
      console.log(value);
      debounceTime(500),
      this.dataSource = Observable.create(observer => this.getClan(value, observer)), switchMap(() => {
        console.log(this.searchResult);
        return Observable.of(this.searchResult);
      });
    });
}

  private getClan(value: FilterModel, observer) {
    if (ClanSearchService.hasMinLength(value.selectedClanNameOrClanTag)) {
      this.clanSearchService.getClanByClanTag(value.selectedClanNameOrClanTag).subscribe(
        (result: ClansByClantagType) => {
          this.searchResult = [];
          this.searchResult.push(result);
          observer.next(result);
        }, () => this.getClanByFilter(value, observer));
    }
  }


  public getClanByFilter(value: FilterModel, observer) {
    this.clanSearchService.getClansByFilterValues(value).subscribe(
      (result: ClansByClantagType[]) => {
        this.searchResult = [];
        this.searchResult = result;
        observer.next(result);
      });
  }

  public onSubmit() {
    this.router.navigate(['clanSearch/' + this.filterModel.selectedClanNameOrClanTag]);
  }

  public changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
    setTimeout(() => this.typeaheadLoading = false, 3000);
  }
}
