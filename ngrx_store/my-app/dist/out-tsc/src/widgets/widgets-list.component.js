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
let WidgetsList = class WidgetsList {
    constructor() {
        this.selected = new EventEmitter();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], WidgetsList.prototype, "widgets", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], WidgetsList.prototype, "selected", void 0);
WidgetsList = __decorate([
    Component({
        selector: 'widgets-list',
        template: `
    <div *ngFor="let widget of widgets"
      (click)="selected.emit(widget)"
      class="fem-card mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">{{widget.name}}</h2>
      </div>
      <div class="mdl-card__supporting-text">
        {{widget.price}}
      </div>
    </div>
    `
    })
], WidgetsList);
export { WidgetsList };
//# sourceMappingURL=widgets-list.component.js.map