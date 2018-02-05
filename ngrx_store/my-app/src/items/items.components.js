var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ItemsService } from '../common/services/items.service';
import { ItemsList } from './items-list.component';
import { ItemDetail } from './item-detail.component';
import { GadgetService } from '../common/services/gadget.service';
var Items = (function () {
    function Items(itemsService, gadgetService, store) {
        this.itemsService = itemsService;
        this.gadgetService = gadgetService;
        this.store = store;
        this.items = itemsService.items;
        this.selectedItem = store.select(function (state) { return state.selectedItem; });
        this.selectedItem.subscribe(function (v) { return console.log(v); });
        this.gadget = gadgetService.gadget;
        itemsService.loadItems();
    }
    Items.prototype.resetItem = function () {
        var emptyItem = { id: null, name: '', description: '' };
        this.store.dispatch({ type: 'SELECT_ITEM', payload: emptyItem });
    };
    Items.prototype.selectItem = function (item) {
        this.store.dispatch({ type: 'SELECT_ITEM', payload: item });
    };
    Items.prototype.saveItem = function (item) {
        this.itemsService.saveItem(item);
        this.resetItem();
    };
    Items.prototype.deleteItem = function (item) {
        this.itemsService.deleteItem(item);
        this.resetItem();
    };
    Items = __decorate([
        Component({
            selector: 'items',
            template: "\n  <div class=\"mdl-grid items\">\n    <div class=\"mdl-cell mdl-cell--6-col\">\n      <items-list [items]=\"items | async\"\n        (selected)=\"selectItem($event)\" (deleted)=\"deleteItem($event)\">\n      </items-list>\n    </div>\n    <div class=\"mdl-cell mdl-cell--6-col\">\n      <item-detail\n        (saved)=\"saveItem($event)\" (cancelled)=\"resetItem($event)\"\n        [item]=\"selectedItem | async\">Select an Item</item-detail>\n    </div>\n  </div>\n  ",
            styles: ["\n    .items {\n      padding: 20px;\n    }\n  "],
            providers: [ItemsService],
            directives: [ItemsList, ItemDetail]
        }),
        __metadata("design:paramtypes", [ItemsService,
            GadgetService,
            Store])
    ], Items);
    return Items;
}());
export { Items };
//# sourceMappingURL=items.components.js.map