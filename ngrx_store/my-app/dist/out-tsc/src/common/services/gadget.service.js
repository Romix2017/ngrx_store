var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Rx from 'rxjs/Rx'; //
let GadgetService = class GadgetService {
    constructor(store) {
        this.store = store;
        this.gadget = Rx.Observable.combineLatest(store.select('items'), store.select('widgets'), (items = [], widgets = []) => {
            return {
                items: [...items],
                widgets: [...widgets]
            };
        });
        this.gadget
            .subscribe(c => console.log('GadgetService.gadget', c));
    }
};
GadgetService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Store])
], GadgetService);
export { GadgetService };
;
//# sourceMappingURL=gadget.service.js.map