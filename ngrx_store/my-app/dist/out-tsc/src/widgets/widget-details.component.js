var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
let WidgetDetails = class WidgetDetails {
    constructor(fb) {
        this.fb = fb;
        this.saved = new EventEmitter();
        this.cancelled = new EventEmitter();
    }
    set widget(value) {
        if (value)
            this.originalName = value.name;
        this.selectedWidget = Object.assign({}, value);
    }
    ngOnInit() {
        this.widgetForm = this.fb.group({
            widgetName: [this.selectedWidget.name, Validators.required],
            widgetPrice: [this.selectedWidget.price, Validators.required]
        });
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], WidgetDetails.prototype, "saved", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], WidgetDetails.prototype, "cancelled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], WidgetDetails.prototype, "widget", null);
WidgetDetails = __decorate([
    Component({
        selector: 'widget-details',
        template: `
  <div class="fem-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text" *ngIf="selectedWidget.id">Editing {{originalName}}</h2>
      <h2 class="mdl-card__title-text" *ngIf="!selectedWidget.id">Create New Widget</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <form [formGroup]="widgetForm" novalidate>
          <div class="mdl-textfield mdl-js-textfield">
            <label>Widget Name</label>
            <input formControlName="widgetName"
              [(ngModel)]="selectedWidget.name"
              name="name"
              placeholder="Enter a name"
              class="mdl-textfield__input" type="text">
          </div>
          <div class="mdl-textfield mdl-js-textfield">
            <label>Widget Price</label>
            <input formControlName="widgetPrice"
              [(ngModel)]="selectedWidget.price"
              name="price"
              placeholder="Enter a price"
              class="mdl-textfield__input" type="text">
          </div>

          <button  (click)="cancelled.emit(selectedWidget)"
          class="mdl-button mdl-js-button mdl-js-ripple-effect">Cancel</button>

          <button (click)="saved.emit(selectedWidget)" [disabled]="!widgetForm.valid"
class="mdl-button mdl-js-button mdl-button--colored mdl-js-ripple-effect">Save</button>
      </form>
    </div>
  </div>
   `,
        styles: [`
    .error { color: red; }
  `]
    }),
    Injectable(),
    __metadata("design:paramtypes", [FormBuilder])
], WidgetDetails);
export { WidgetDetails };
//# sourceMappingURL=widget-details.component.js.map