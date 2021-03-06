import { Http, Headers } from '@angular/http';
import { Injectable, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { Item } from '../models/item.model';
import { AppStore } from '../models/appstore.model';


const BASE_URL = 'api/latest/items';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class ItemsService {
  items: Observable<Array<Item>>;

  constructor(private http: Http, private store: Store<AppStore>) {
    this.items = store.select(state => state.items);
 
  }

  loadItems() {
    this.http.get(BASE_URL)
      .map(res =>  res.json().data)
      .map(payload => ({ type: 'ADD_ITEMS', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  saveItem(item: Item) {
    (item.id) ? this.updateItem(item) : this.createItem(item);
  }

  createItem(item: Item) {
    this.http.post(`${BASE_URL}`, JSON.stringify(item), HEADER)
      .map(res => res.json().data)
      .map(payload => ({ type: 'CREATE_ITEM', payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  updateItem(item: Item) {
    this.http.put(`${BASE_URL}/${item.id}`, JSON.stringify(item), HEADER)
      .subscribe(action => this.store.dispatch({ type: 'UPDATE_ITEM', payload: item }));
  }

  deleteItem(item: Item) {
    this.http.delete(`${BASE_URL}/${item.id}`)
      .subscribe(action => this.store.dispatch({ type: 'DELETE_ITEM', payload: item }));
  }
}
