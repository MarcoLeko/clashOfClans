import {Component, Input, OnChanges, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';
import {ClansByClantagType, PlayerByPlayerTagType} from '../../../../../../generated/types';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AngularFireStorage} from 'angularfire2/storage';

@Component({
  selector: 'app-clan-modal',
  templateUrl: './clan-modal.component.html',
  styleUrls: ['./clan-modal.component.css']
})
export class ClanModalComponent implements OnChanges{

  @ViewChild('childModal') childModal: ModalDirective;
  @Input() playerResult: PlayerByPlayerTagType;
  @Input() clanInfo: ClansByClantagType;

  public trophyHomeRef = this.storage.ref('images/trophy_home.png');
  public trophyNightRef = this.storage.ref('images/trophy_night.png');
  public trophyHomeImg: Observable<string | null>;
  public trophyNightImg: Observable<string | null>;

  constructor(private router: Router, private storage: AngularFireStorage) {
  }

  ngOnChanges(): void {
    this.loadTrophyImg();
  }

  private loadTrophyImg() {
    this.trophyHomeRef.getDownloadURL().subscribe(url => this.trophyHomeImg = url);
    this.trophyNightRef.getDownloadURL().subscribe(url => this.trophyNightImg = url);
  }

  open() {
    this.childModal.show();
  }

  memberSearch(member) {
    this.childModal.hide();
    this.router.navigate(['search/' + member.tag]);
  }

}
