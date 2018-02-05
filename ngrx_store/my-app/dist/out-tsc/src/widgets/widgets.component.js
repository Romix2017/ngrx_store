var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Store } from '@ngrx/store';
import { Component, Injectable } from '@angular/core';
import { WidgetsService } from '../common/services/widget.service';
let Widgets = class Widgets {
    constructor(_widgetsService, _store) {
        this._widgetsService = _widgetsService;
        this._store = _store;
        this.selectedWidget = _store.select(state => state.selectedWidget);
        this.widgets = _widgetsService.widgets;
        _widgetsService.loadWidgets();
    }
    selectWidget(widget) {
        this._store.dispatch({ type: 'SELECT_WIDGET', payload: widget });
    }
    saveWidget(widget) {
        this._widgetsService.save(widget);
    }
    resetWidget() {
        let emptyItem = { id: null, name: '', price: '' };
        this._store.dispatch({ type: 'SELECT_WIDGET', payload: emptyItem });
    }
};
Widgets = __decorate([
    Component({
        selector: 'widgets',
        template: `
    <h4>Fix my inputs and outputs!</h4>
    <div class="mdl-grid items">
      <div class="mdl-cell mdl-cell--6-col">
        <widgets-list [widgets]="widgets | async"
        (selected)="selectWidget($event)"></widgets-list>
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
    }),
    Injectable(),
    __metadata("design:paramtypes", [WidgetsService,
        Store])
], Widgets);
export { Widgets };
//# sourceMappingURL=widgets.component.js.map