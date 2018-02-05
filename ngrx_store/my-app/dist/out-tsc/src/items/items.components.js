var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ItemsService } from '../common/services/items.service';
import { GadgetService } from '../common/services/gadget.service';
let Items = class Items {
    constructor(itemsService, gadgetService, store) {
        this.itemsService = itemsService;
        this.gadgetService = gadgetService;
        this.store = store;
        this.items = itemsService.items;
        this.selectedItem = store.select(state => state.selectedItem);
        this.selectedItem.subscribe(v => console.log(v));
        this.gadget = gadgetService.gadget;
        itemsService.loadItems();
    }
    resetItem() {
        let emptyItem = { id: null, name: '', description: '' };
        this.store.dispatch({ type: 'SELECT_ITEM', payload: emptyItem });
    }
    selectItem(item) {
        this.store.dispatch({ type: 'SELECT_ITEM', payload: item });
    }
    saveItem(item) {
        this.itemsService.saveItem(item);
        // Generally, we would want to wait for the result of `itemsService.saveItem`
        // before resetting the current item.
        this.resetItem();
    }
    deleteItem(item) {
        this.itemsService.deleteItem(item);
        // Generally, we would want to wait for the result of `itemsService.deleteItem`
        // before resetting the current item.
        this.resetItem();
    }
};
Items = __decorate([
    Component({
        selector: 'items',
        template: `
  <div class="mdl-grid items">
    <div class="mdl-cell mdl-cell--6-col">
      <items-list [items]="items | async"
        (selected)="selectItem($event)" (deleted)="deleteItem($event)">
      </items-list>
    </div>
    <div class="mdl-cell mdl-cell--6-col">
      <item-detail
        (saved)="saveItem($event)" (cancelled)="resetItem($event)"
        [item]="selectedItem | async">Select an Item</item-detail>
    </div>
  </div>
  `,
        styles: [`
    .items {
      padding: 20px;
    }
  `]
    }),
    Injectable(),
    __metadata("design:paramtypes", [ItemsService,
        GadgetService,
        Store])
], Items);
export { Items };
//# sourceMappingURL=items.components.js.map