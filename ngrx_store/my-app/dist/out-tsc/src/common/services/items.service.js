var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
const BASE_URL = 'api/latest/items';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };
let ItemsService = class ItemsService {
    constructor(http, store) {
        this.http = http;
        this.store = store;
        this.items = store.select(state => state.items);
    }
    loadItems() {
        this.http.get(BASE_URL)
            .map(res => res.json().data)
            .map(payload => ({ type: 'ADD_ITEMS', payload }))
            .subscribe(action => this.store.dispatch(action));
    }
    saveItem(item) {
        (item.id) ? this.updateItem(item) : this.createItem(item);
    }
    createItem(item) {
        this.http.post(`${BASE_URL}`, JSON.stringify(item), HEADER)
            .map(res => res.json().data)
            .map(payload => ({ type: 'CREATE_ITEM', payload }))
            .subscribe(action => this.store.dispatch(action));
    }
    updateItem(item) {
        this.http.put(`${BASE_URL}/${item.id}`, JSON.stringify(item), HEADER)
            .subscribe(action => this.store.dispatch({ type: 'UPDATE_ITEM', payload: item }));
    }
    deleteItem(item) {
        this.http.delete(`${BASE_URL}/${item.id}`)
            .subscribe(action => this.store.dispatch({ type: 'DELETE_ITEM', payload: item }));
    }
};
ItemsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, Store])
], ItemsService);
export { ItemsService };
//# sourceMappingURL=items.service.js.map