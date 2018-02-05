import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { Component, Inject, Injectable } from '@angular/core'
import { WidgetsService } from '../common/services/widget.service';
import { WidgetsList } from './widgets-list.component';
import { WidgetDetails } from './widget-details.component';
import { AppStore } from "../common/models/appstore.model";
import { Widget } from "../common/models/widget.model";
import { GadgetService } from "../common/services/gadget.service";
import { Gadget } from "../common/models/gadget.model";

@Component({
  selector: 'widgets',
  template: `
    <div class="mdl-grid items">
      <div class="mdl-cell mdl-cell--6-col">
        <widgets-list [widgets]="widgets | async"
        (selected)="selectWidget($event)" (deleted) = "deleteWidget($event)"></widgets-list>
      </div>
      <div class="mdl-cell mdl-cell--6-col">
        <widget-details (cancelled)="resetWidget($event)" (saved)="saveWidget($event)"
        [widget]="selectedWidget | async">Select a Widget</widget-details>
      </div>
    </div>
  `,
  styles: [`
    .widgets {
      padding: 20px;
    }
  `]
})
@Injectable()
export class Widgets {
  widgets: Observable<Array<Widget>>;
  selectedWidget: Observable<Widget>;
  constructor(private _widgetsService: WidgetsService,
    private _store: Store<AppStore>) {
    this.selectedWidget = _store.select(state => state.selectedWidget);
    this.widgets = _widgetsService.widgets;
    _widgetsService.loadWidgets();
  }

  selectWidget(widget) {
    this._store.dispatch({ type: 'SELECT_WIDGET', payload: widget });
  }

  deleteWidget(widget) {
    this._widgetsService.remove(widget);
  }

  saveWidget(widget) {
    this._widgetsService.save(widget);
  }

  resetWidget() {
    let emptyItem: Widget = { id: null, name: '', price: '' };
    this._store.dispatch({ type: 'SELECT_WIDGET', payload: emptyItem });
  }

}
