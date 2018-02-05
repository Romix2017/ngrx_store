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
let ItemsList = class ItemsList {
    constructor() {
        this.selected = new EventEmitter();
        this.deleted = new EventEmitter();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], ItemsList.prototype, "items", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ItemsList.prototype, "selected", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ItemsList.prototype, "deleted", void 0);
ItemsList = __decorate([
    Component({
        selector: 'items-list',
        template: `
  <div *ngFor="let item of items" (click)="selected.emit(item)"
    class="fem-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">{{item.name}}</h2>
    </div>
    <div class="mdl-card__supporting-text">
      {{item.description}}
    </div>
    <div class="mdl-card__menu">
      <button (click)="deleted.emit(item); $event.stopPropagation();"
        class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i class="material-icons">close</i>
      </button>
    </div>
  </div>
  `
    })
], ItemsList);
export { ItemsList };
//# sourceMappingURL=items-list.component.js.map