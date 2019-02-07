import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs";
import {ScoutService} from "../../services/scout.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  public scoutIds$: Observable<string[]>;
  public newScoutName: string = '';
  public newScoutError = false;
  private scoutObservables: { [scoutId: string]: Observable<{ scoutId: string, name: string }> } = {};

  constructor(public scoutService: ScoutService) {
    this.scoutIds$ = scoutService.scoutIds$;
    // this.scouts$ = of([{name: "name1", scoutId: "378"}, {name: "name2", scoutId: "379"}])
  }

  getScout$(scoutId: string): Observable<{ scoutId: string, name: string }> {
    console.log("from HomePageComponent, get scoutId: ", scoutId);
    if (this.scoutObservables[scoutId] === undefined) {
      this.scoutObservables[scoutId] = this.scoutService.getScout$(scoutId);
    }
    return this.scoutObservables[scoutId];
  }

  createScout() {
    if (this.newScoutName.trim().length < 3) {
      this.newScoutError = true;
      return;
    }
    this.scoutService.createScout(this.newScoutName);
    this.newScoutError = false;
    this.newScoutName = "";
  }
}
