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
const BASE_URL = 'api/latest/widgets';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };
let WidgetsService = class WidgetsService {
    constructor(http, store) {
        this.http = http;
        this.store = store;
        this.widgets = store.select(state => state.widgets);
    }
    create(widget) {
        // this.widgets = [...this.widgets, widget];
        return this.http.post(BASE_URL, JSON.stringify(widget), HEADER)
            .map(res => res.json().data)
            .map(payload => ({ type: 'CREATE_WIDGET', payload }))
            .subscribe(action => this.store.dispatch(action));
    }
    remove(widget) {
        return this.http.delete(`${BASE_URL}?id=${widget.id}`)
            .map(res => res.json())
            .map(payload => ({ type: 'DELETE_WIDGET', payload }))
            .subscribe(action => this.store.dispatch(action));
    }
    save(widget) {
        (widget.id) ? this.update(widget) : this.create(widget);
    }
    update(widget) {
        this.http.put(`${BASE_URL}/${widget.id}`, JSON.stringify(widget), HEADER)
            .subscribe(action => this.store.dispatch({ type: 'UPDATE_WIDGET', payload: widget }));
    }
    loadWidgets() {
        return this.http.get(BASE_URL)
            .map(res => res.json().data)
            .map(payload => ({ type: 'ADD_WIDGETS', payload }))
            .subscribe(action => this.store.dispatch(action));
    }
};
WidgetsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, Store])
], WidgetsService);
export { WidgetsService };
//# sourceMappingURL=widget.service.js.map