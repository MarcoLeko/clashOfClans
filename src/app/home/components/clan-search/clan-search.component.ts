import {Component, EventEmitter, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {AngularFireStorage} from 'angularfire2/storage';
import {LocationSearchService} from '../../services/location-search/location-search.service';
import {ClansByClantagType, LocationsType} from '../../../../generated/types';
import {ClanSearchService} from '../../../shared/services/clan-search/clan-search.service';
import {FilterModel} from './filter-model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime, switchMap} from 'rxjs/operators';

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

  public clanEmitter: EventEmitter<ClansByClantagType[]> = new EventEmitter<ClansByClantagType[]>();
  public typeaheadLoading: boolean;
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
    this.clanForm.valueChanges.pipe(
      debounceTime(500),
      switchMap((form) => {
        return this.getClan(form);
      })
    ).subscribe(result => {
      this.clanEmitter.emit(result);
    });
  }

  public getClan(value: FilterModel) {
    if (ClanSearchService.hasMinLength(value.selectedClanNameOrClanTag)) {
      return this.clanSearchService.getClanByClanTag(value.selectedClanNameOrClanTag).map(
        (result: ClansByClantagType) => {
          return result;
        }).toArray().catch(() => this.getClanByFilter(value));
    } else {
      return Observable.of([]);
    }
  }

  public getClanByFilter(value: FilterModel) {
    return this.clanSearchService.getClansByFilterValues(value).map(
      (result: ClansByClantagType[]) => {
        return result;
      });
  }

  public onSubmit() {
    this.router.navigate(['clanSearch/' + this.filterModel.selectedClanNameOrClanTag]);
  }

  public changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }
}
