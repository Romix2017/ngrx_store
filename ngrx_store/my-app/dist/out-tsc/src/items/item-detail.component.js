var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
let ItemDetail = class ItemDetail {
    constructor(fb) {
        this.fb = fb;
        this.saved = new EventEmitter();
        this.cancelled = new EventEmitter();
    }
    set item(value) {
        if (value)
            this.originalName = value.name;
        this.selectedItem = Object.assign({}, value);
    }
    ngOnInit() {
        this.widgetForm = this.fb.group({
            itemName: [this.selectedItem.name, Validators.required],
            itemDescription: [this.selectedItem.description, Validators.required]
        });
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], ItemDetail.prototype, "saved", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ItemDetail.prototype, "cancelled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ItemDetail.prototype, "item", null);
ItemDetail = __decorate([
    Component({
        selector: 'item-detail',
        template: `
  <div class="fem-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text" *ngIf="selectedItem.id">Editing {{originalName}}</h2>
      <h2 class="mdl-card__title-text" *ngIf="!selectedItem.id">Create New Item</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <form [formGroup]="widgetForm" novalidate>
          <div class="mdl-textfield mdl-js-textfield">
            <label>Item Name</label>
            <input [(ngModel)]="selectedItem.name"
              name="name"
              placeholder="Enter a name"
              class="mdl-textfield__input" type="text">
          </div>
          <div class="mdl-textfield mdl-js-textfield">
            <label>Item Description</label>
            <input [(ngModel)]="selectedItem.description"
              name="description"
              placeholder="Enter a description"
              class="mdl-textfield__input" type="text">
          </div>
      </form>
    </div>
    <div class="mdl-card__actions">
        <button type="submit" (click)="cancelled.emit(selectedItem)"
          class="mdl-button mdl-js-button mdl-js-ripple-effect">Cancel</button>
        <button type="submit" (click)="saved.emit(selectedItem)"
        [disabled]="!widgetForm.valid"
          class="mdl-button mdl-js-button mdl-button--colored mdl-js-ripple-effect">Save</button>
    </div>
  </div>
  `
    }),
    __metadata("design:paramtypes", [FormBuilder])
], ItemDetail);
export { ItemDetail };
//# sourceMappingURL=item-detail.component.js.map